// import { useEffect, useState } from "react";
// import MultiSigWalletAbi from "../configs/MultiSigWallet_ABI.json";
// import { parseExternalContractTransaction } from "../helpers";
// import { useLocalStorage } from "../hooks";
// import TransactionDetailsModal from "./MultiSig/TransactionDetailsModal";
// import { CameraOutlined, QrcodeOutlined } from "@ant-design/icons";
// import WalletConnect from "@walletconnect/client";
// import { Badge, Button, Input, Spin } from "antd";
// import { ethers } from "ethers";
// import QrReader from "react-qr-reader";
import Image from "next/image";
import { CameraIcon } from "@heroicons/react/24/outline";
// import { walletConnectLogo } from "~~/public/assets/wc-logo";
import walletConnectLogo from "~~/public/assets/walletconnect-logo.svg";

const WalletConnectInput = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div>
          <Image src={walletConnectLogo} alt="walletConnect" style={{ height: 50, width: 50 }} />
        </div>
        <div className="m-2">
          <div className="form-control">
            <div className="input-group">
              <input type="text" placeholder="Search…" className="input input-bordered" />
              <button className="btn btn-square">
                <CameraIcon className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default WalletConnectInput;
