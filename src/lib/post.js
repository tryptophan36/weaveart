import contractData from "@/contracts/contractData.json";
import { createTransaction,signTransaction,postTransaction } from "arweavekit/transaction";

const toArrayBuffer = async (file) =>
  new Promise((resolve, reject) => {
    const fr = new FileReader();
    fr.readAsArrayBuffer(file);
    fr.addEventListener("loadend", (e) => {
      resolve(e.target?.result);
    });
  });

export async function postAsset(asset) {
  // console.log("asset",asset)
  let tempdata=null
  if(asset.file)
   tempdata = await toArrayBuffer(asset.file);
  else if(asset.audioFile)
  tempdata=await toArrayBuffer(asset.audioFile)
  else if(asset.videoFile)
  tempdata=await toArrayBuffer(asset.videoFile)

  const data=tempdata
  // array of input tags
  const inputTags = [
    // Content mime (media) type (For eg, "image/png")
    { name: "Content-Type", value: asset.file.type },
    // { name: "Indexed-By", value: "ucm" },
    { name: "License", value: "yRj4a5KMctX_uOmKWCFJIjmY8DeJcusVk6-HzLiM_t8" },
    { name: "Payment-Mode", value: "Global-Distribution" },
    // Help network identify post as SmartWeave Contract
    { name: "App-Name", value: "SmartWeaveContract" },
    { name: "App-Version", value: "0.3.0" },
    // Link post to contract source
    { name: "Contract-Src", value: contractData.contractId },
    // Initial state for our post (as a contract instance)
    {
      name: "Init-State",
      value: JSON.stringify({
        creator: asset.creatorId,
        owner: asset.creatorId,
        ticker: "STARTERKIT-ASSET",
        balances: {
          [asset.creatorId]: 1,
        },
        contentType: asset.file.type,
        comments: [],
        likes: {},
      }),
    },
    { name: "Creator-Name", value: asset.creatorName },
    {  name: "Creator-Address",value:asset.userAddress},
    // Standard tags following ANS-110 standard for discoverability of asset
    { name: "Creator", value: asset.creatorId },
    { name: "Title", value: asset.title },
    { name: "Description", value: asset.description },
    { name: "Type", value: "image" },
    { name:"weaveart",value:"artupload"}
  ];

  // adding hashtags passed in by users to the 'inputTags' array
  asset.tags.map((t, i) => {
    inputTags.push({ name: t.value, value: t.value });
  });

  if (asset.license === "access") {
    inputTags.push({ name: "Access", value: "Restricted" }, { name: "Access-Fee", value: "One-Time-" + asset.payment });
  }
  if (asset.license === "derivative") {
    inputTags.push(
      { name: "Derivation", value: "Allowed-with-license-fee" },
      { name: "Derivation-Fee", value: "One-Time-" + asset.payment }
    );
  }
  if (asset.license === "commercial") {
    inputTags.push(
      { name: "Commercial-Use", value: "Allowed" },
      { name: "Commercial-Fee", value: "One-Time-" + asset.payment }
    );
  }
  console.log("inputTags",inputTags)
  console.log("data",data)
  const txn = await createTransaction({
    type: "data",
    environment: "mainnet",
    data: data,
    options: {
      tags: inputTags,
      signAndPost:"true"
    },
  });

 console.log("transaction",txn)
  console.log("Transaction uploaded successfully", txn.transaction.id);

  return txn.transaction.id;
}
