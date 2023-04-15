import '../App.css';
import React, { useState , useEffect} from "react"
import SocialLogin from "@biconomy/web3-auth"
import { ChainId } from "@biconomy/core-types";
import { ethers } from "ethers";
import SmartAccount from "@biconomy/smart-account";
import { activeChainId } from '../utils/chainConfig';
import "@biconomy/web3-auth/dist/src/style.css"
import {useNavigate} from "react-router-dom"

type Props = {
    setOriginSmartAccount: (val: object) => void;
};


const Login: React.FC<Props> = ({setOriginSmartAccount}) => {
    const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [socialLogin, setSocialLogin] = useState<SocialLogin | null>()
  const [smartAccountAddress, setSmartAccountAddress] = useState<string | null>();
  // const dappContractAddress = "";
  // const activeChainId = ChainId.POLYGON_MUMBAI;

  async function initWallet() {
    const socialLoginSDK = new SocialLogin();
    await socialLoginSDK.init(ethers.utils.hexValue(activeChainId))
    socialLoginSDK.showConnectModal();
    setSocialLogin(socialLoginSDK);
    return socialLoginSDK

  }

  async function login() {
    try {
      let socialLogin = await initWallet();

      if (!socialLogin.provider) {
        socialLogin.showWallet();
      } else {
        setIsLogin(true);
        const provider = new ethers.providers.Web3Provider(
          socialLogin.provider,
        );
        const accounts = await provider.listAccounts();
        console.log("EOA address lul", accounts);


        let options = {
          activeNetworkId: activeChainId,
          supportedNetworksIds: [activeChainId
          ],
          networkConfig: [
            {
              chainId: ChainId.POLYGON_MUMBAI,
              // Optional dappAPIKey (only required if you're using Gasless)
              dappAPIKey: '59fRCMXvk.8a1652f0-b522-4ea7-b296-98628499aee3',
              // if need to override Rpc you can add providerUrl: 
            },
          ]
        }

        const walletProvider = new ethers.providers.Web3Provider(socialLogin.provider);

        let smartAccount = new SmartAccount(walletProvider, options);
        smartAccount = await smartAccount.init();
        console.log(smartAccount.getsigner())
        let smartAccountInfo = await smartAccount.getSmartAccountState();
        // console.log(smartAccountInfo)
        setSmartAccountAddress(smartAccountInfo?.address);
        console.log(smartAccount)
        setOriginSmartAccount(smartAccount)
        // navigate("/chat");
      }



    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    login()
  },[])

  return (
    <div className="App">
   
            <div className='row address-container'>
              Smart Account: {smartAccountAddress}
            </div>
    </div>
  );
}

export default Login;
