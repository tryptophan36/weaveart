# WeaveArt ( https://weaveart.vercel.app/ )

WeaveArt is a creative platform where artists can share their visual and auditory masterpieces with the world. Inspired by the Permaweb and powered by Arweave, WeaveArt provides a decentralized and permanent space for artists to showcase their work, allowing viewers to appreciate and support their favorite creators.

**Landing Page:** A form that allows users to upload Atomic assets on Arweave, complete with various metadata configurations.
All file types Image, Audio, Video is supported.


![Screenshot 2023-11-12 211401](https://github.com/tryptophan36/weaveart/assets/100468551/5951679a-8329-4ee0-91f4-f76bd65194d7)


**View Page:** A dedicated space to view the uploaded assets and engage with them through on-chain likes (known as stamps) and comments.

![Screenshot 2023-11-12 211443](https://github.com/tryptophan36/weaveart/assets/100468551/de09019d-6bc4-4cec-9895-004c27e4d866)


## Features

- **Decentralized Hosting:** WeaveArt utilizes the Permaweb, a decentralized and permanent web storage solution built on top of Arweave. This ensures that your artwork remains accessible and immutable over time.

- **Artwork Variety:** Whether it's stunning images, captivating audio compositions, or mesmerizing videos, WeaveArt embraces a diverse range of artistic expressions.

- **Appreciation through Donations:** Viewers can express their appreciation for artists by making secure and transparent donations. Powered by Arweave, these transactions are permanently recorded on the blockchain.





  The created project is initialized with a contract which is located at `src/contracts`. You can make necessary modifications to the contract code according to your needs and run the script `deploy-contracts` to automatically update the contract linked functionality to the new one.

  ```bash
  # With wallet.json keyfile present at root
  yarn deploy-contracts
  # With keyfile present at a custom path
  yarn deploy-contracts /Users/arweave/Documents/keys/wallet.json
  ```

- **View Page:** A space to showcase assets and metadata, augmented with features like [Stamps](https://stamps.arweave.dev/#/en/main) (Arweave's version of 'likes') and [on-chain comments](https://specs.ar-io.dev/#/view/SYCrxZYzhP_L_iwmxS7niejyeJ_XhJtN4EArplCPHGQ).

## Leverage Modularity

The true strength of this kit lies in its modularity. Simply interchange the core asset from image to music and transform an image sharing application to a music hub. Or swap in for videos to create a streaming service. As any form of data can be uploaded to the Arweave network, the possibilities are limitless.

