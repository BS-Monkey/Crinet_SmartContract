// constants
import Web3EthContract from "web3-eth-contract";
import Web3 from "web3";
// log
import { fetchData } from "../data/dataActions";


const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ACCOUNT",
    payload: payload,
  };
};


export const connect = (account, provider) => {
  console.log("Account", account);
  console.log("Provider", provider);
  return async (dispatch) => {
    dispatch(connectRequest());
    const abiResponse = await fetch("/config/abi.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const abi = await abiResponse.json();

    const busdABIResponse = await fetch("/config/erc20ABI.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const busdABI = await busdABIResponse.json();

    const configResponse = await fetch("/config/config.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    const CONFIG = await configResponse.json();
    console.log('config', CONFIG)
    Web3EthContract.setProvider(provider);
    let web3 = new Web3(provider);

    let SmartContractObj = new Web3EthContract(
      abi,
      CONFIG.CONTRACT_ADDRESS
    );

    let BUSDContractObj = new Web3EthContract(
      busdABI,
      CONFIG.BUSD_ADDRESS
    );

    dispatch(
      connectSuccess({
        account: account,
        smartContract: SmartContractObj,
        busdContract: BUSDContractObj,
        web3: web3,
      })
    );
  };
};

export const updateAccount = (account) => {
  return async (dispatch) => {
    dispatch(updateAccountRequest({ account: account }));
    dispatch(fetchData(account));
  };
};
