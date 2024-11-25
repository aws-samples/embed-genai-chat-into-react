<!-- Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved. -->
<!-- SPDX-License-Identifier: MIT-0 -->

# Embed GenAI chat into React

The React component is a single file [./src/embed.ts](./src/embed.ts). Simply download this into your project and reference from your component like so.

```ts
import Chat from "./embed";
```

Then instantiate an instance of the Chat component like so.

```ts
<Chat
	embedUrl="https://xxxxxxxx.chat.qbusiness.xx-xxxx-x.on.aws/"
	embedWidth={600}          // Optional
	embedHeight={650}         // Optional
	embedOffsetRightPc={5}    // Optional
	headerText="Chat"         // Optional
	headerInfo="Chat with us" // Optional
/>
```

## Dependencies

This component has 2 dependencies 1) [React](https://react.dev/), 2) [CloudScape Design Components](https://cloudscape.design/).

```sh
npm install --save react
npm install --save @cloudscape-design/components
```

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.

