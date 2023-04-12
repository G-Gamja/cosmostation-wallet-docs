(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8364],{2553:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/integration-mobile/cosmjs",function(){return s(479)}])},9369:function(e,n,s){"use strict";var o=s(5893);s(7294);let t={logo:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)("svg",{width:"24",height:"22",viewBox:"0 0 72 66",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,o.jsx)("path",{d:"M24.3551 53.1043L10.8159 29.6575C10.1275 28.4702 10.1275 27.0035 10.8159 25.8162L24.3551 2.36947C25.0436 1.18217 26.3107 0.443848 27.6876 0.443848H54.7661C56.143 0.443848 57.4101 1.17219 58.0985 2.36947L71.6378 25.8162L64.9829 29.6575L52.5511 8.13638H29.9125L18.5982 27.7419L31.03 49.263L24.3751 53.1043H24.3551Z",fill:"#9C6CFF"}),(0,o.jsx)("path",{d:"M44.1545 65.8455H17.076C15.6992 65.8455 14.432 65.1171 13.7436 63.9198L0.204346 40.4731L6.85923 36.6318L19.291 58.1529H41.9296L53.2439 38.5475L40.8121 17.0263L47.467 13.1851L61.0063 36.6318C61.6947 37.8191 61.6947 39.2858 61.0063 40.4731L47.467 63.9198C46.7786 65.1071 45.5115 65.8455 44.1346 65.8455H44.1545Z",fill:"#05D2DD"})]}),(0,o.jsx)("span",{style:{marginLeft:".4em",fontWeight:800},children:"Cosmostation"})]}),project:{link:"https://github.com/cosmostation"},docsRepositoryBase:"https://github.com/cosmostation/cosmostation-wallet-docs",useNextSeoProps:()=>({titleTemplate:"%s – Cosmostation Docs"})};n.Z=t},479:function(e,n,s){"use strict";s.r(n);var o=s(5893),t=s(4319),i=s(2840),r=s(9369);s(9966);var a=s(1151);function l(e){let n=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",pre:"pre",code:"code",span:"span"},(0,a.ah)(),e.components);return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{children:"Integrate cosmjs"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://tutorials.cosmos.network/tutorials/7-cosmjs/",children:"Cosmjs Tutorial"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://github.com/cosmostation/cosmostation-dapps-example/tree/main/examples/cosmjs-example",children:"Cosmjs Example Code"})}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://cosmjs-example.dev.cosmostation.io/",children:"Cosmjs Example Page"})}),"\n",(0,o.jsx)(n.h2,{id:"add-package",children:"Add package"}),"\n",(0,o.jsx)(n.pre,{"data-language":"bash","data-theme":"default",filename:"yarn",children:(0,o.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"yarn "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"add"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"@cosmostation/cosmos-client"})]})})}),"\n",(0,o.jsx)(n.pre,{"data-language":"bash","data-theme":"default",filename:"npm",children:(0,o.jsx)(n.code,{"data-language":"bash","data-theme":"default",children:(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"npm "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"install"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string)"},children:"@cosmostation/cosmos-client"})]})})}),"\n",(0,o.jsx)(n.h2,{id:"offline-signer",children:"Offline Signer"}),"\n",(0,o.jsx)(n.pre,{"data-language":"js","data-theme":"default",children:(0,o.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" { getOfflineSigner } "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"@cosmostation/cosmos-client"'}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"offlineSigner"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getOfflineSigner"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"CHAIN_ID"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:");"})]})]})}),"\n",(0,o.jsx)(n.pre,{"data-language":"js","data-theme":"default",filename:"Example",children:(0,o.jsxs)(n.code,{"data-language":"js","data-theme":"default",children:[(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" { getOfflineSigner } "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"@cosmostation/cosmos-client"'}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" { GasPrice"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" calculateFee } "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"@cosmjs/stargate"'}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"import"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" { SigningCosmWasmClient } "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"from"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"@cosmjs/cosmwasm-stargate"'}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"offlineSigner"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"getOfflineSigner"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"CHAIN_ID"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"rpcEndpoint"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"RPC_END_POINT"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:";"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"client"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"SigningCosmWasmClient"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".connectWithSigner"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  rpcEndpoint"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  offlineSigner"})}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:");"})}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"//getAccounts"})}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"accounts"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"offlineSigner"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".getAccounts"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"();"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-comment)"},children:"//execute"})}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"gasPrice"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"GasPrice"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".fromString"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-string-expression)"},children:'"0.01denom"'}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:");"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"fees"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" {"})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  upload"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"calculateFee"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"1500000"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" gasPrice)"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  init"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"calculateFee"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"500000"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" gasPrice)"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  exec"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:":"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:"calculateFee"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"500000"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" gasPrice)"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"};"})}),"\n",(0,o.jsx)(n.span,{className:"line",children:" "}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"const"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"result"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"="}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-keyword)"},children:"await"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:" "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"client"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-function)"},children:".execute"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"("})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  accounts["}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"0"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"].address"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"RECEIPT_ADDRESS"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"MESSAGE"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-punctuation)"},children:","})]}),"\n",(0,o.jsxs)(n.span,{className:"line",children:[(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:"  "}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-token-constant)"},children:"fees"}),(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:".exec"})]}),"\n",(0,o.jsx)(n.span,{className:"line",children:(0,o.jsx)(n.span,{style:{color:"var(--shiki-color-text)"},children:");"})})]})})]})}s(5675);let c={MDXContent:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:n}=Object.assign({},(0,a.ah)(),e.components);return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)},pageOpts:{filePath:"pages/integration-mobile/cosmjs.mdx",route:"/integration-mobile/cosmjs",headings:[{depth:1,value:"Integrate cosmjs",id:"integrate-cosmjs"},{depth:2,value:"Add package",id:"add-package"},{depth:2,value:"Offline Signer",id:"offline-signer"}],timestamp:1681286153e3,pageMap:[{kind:"Meta",data:{index:"Introduction",overview:"Overview","-- Integration":{type:"separator",title:"Integration"},"integration-extension":"Extension","integration-mobile":"Mobile Wallet",contact:{title:"Contact ↗",type:"page",href:"https://twitter.com/IBCwallet",newWindow:!0}}},{kind:"MdxPage",name:"index",route:"/"},{kind:"Folder",name:"integration-extension",route:"/integration-extension",children:[{kind:"Meta",data:{installation:"Installation",cosmos:"Cosmos Chains",evm:"EVM Network",aptos:"APTOS Network",sui:"SUI Network"}},{kind:"Folder",name:"aptos",route:"/integration-extension/aptos",children:[{kind:"Meta",data:{provider:"Provider","connect-and-account":"Connect & Account","sign-and-submit-transaction":"Sign & Submit Transaction",network:"Network",event:"Event"}},{kind:"MdxPage",name:"connect-and-account",route:"/integration-extension/aptos/connect-and-account"},{kind:"MdxPage",name:"event",route:"/integration-extension/aptos/event"},{kind:"MdxPage",name:"network",route:"/integration-extension/aptos/network"},{kind:"MdxPage",name:"provider",route:"/integration-extension/aptos/provider"},{kind:"MdxPage",name:"sign-and-submit-transaction",route:"/integration-extension/aptos/sign-and-submit-transaction"}]},{kind:"Folder",name:"cosmos",route:"/integration-extension/cosmos",children:[{kind:"Meta",data:{provider:"Provider",chains:"Chains",accounts:"Accounts","sign-tx":"Sign Transaction","sign-message":"Sign Message","send-tx":"Send Transaction","cw20-token":"CW20 Tokens","auto-sign":"Auto Sign",disconnect:"Disconnect",event:"Event",error:"Error","integrate-cosmjs":"Integrate Cosmjs","integrate-keplr":"Integrate Keplr"}},{kind:"MdxPage",name:"accounts",route:"/integration-extension/cosmos/accounts"},{kind:"MdxPage",name:"auto-sign",route:"/integration-extension/cosmos/auto-sign"},{kind:"MdxPage",name:"chains",route:"/integration-extension/cosmos/chains"},{kind:"MdxPage",name:"cw20-token",route:"/integration-extension/cosmos/cw20-token"},{kind:"MdxPage",name:"disconnect",route:"/integration-extension/cosmos/disconnect"},{kind:"MdxPage",name:"error",route:"/integration-extension/cosmos/error",frontMatter:{sidebar_position:11}},{kind:"MdxPage",name:"event",route:"/integration-extension/cosmos/event",frontMatter:{sidebar_position:10}},{kind:"MdxPage",name:"integrate-cosmjs",route:"/integration-extension/cosmos/integrate-cosmjs"},{kind:"MdxPage",name:"integrate-keplr",route:"/integration-extension/cosmos/integrate-keplr",frontMatter:{sidebar_position:13}},{kind:"MdxPage",name:"provider",route:"/integration-extension/cosmos/provider"},{kind:"MdxPage",name:"send-tx",route:"/integration-extension/cosmos/send-tx"},{kind:"MdxPage",name:"sign-message",route:"/integration-extension/cosmos/sign-message"},{kind:"MdxPage",name:"sign-tx",route:"/integration-extension/cosmos/sign-tx"}]},{kind:"Folder",name:"evm",route:"/integration-extension/evm",children:[{kind:"Meta",data:{provider:"Provider","use-web3-js":"Use web3.js","use-ethers":"Use ethers",event:"Event","supported-rpc-methods":"Supported RPC Methods"}},{kind:"MdxPage",name:"event",route:"/integration-extension/evm/event"},{kind:"MdxPage",name:"provider",route:"/integration-extension/evm/provider"},{kind:"MdxPage",name:"supported-rpc-methods",route:"/integration-extension/evm/supported-rpc-methods"},{kind:"MdxPage",name:"use-ethers",route:"/integration-extension/evm/use-ethers"},{kind:"MdxPage",name:"use-web3-js",route:"/integration-extension/evm/use-web3-js"}]},{kind:"MdxPage",name:"installation",route:"/integration-extension/installation"},{kind:"Folder",name:"sui",route:"/integration-extension/sui",children:[{kind:"MdxPage",name:"1-provider",route:"/integration-extension/sui/1-provider"},{kind:"Meta",data:{provider:"Provider","connect-and-get-accounts":"Connect & Get Accounts","execute-move-call":"Execute Move Call","sign-and-execute-transaction":"Sign & Execute Transaction","1-provider":"1 Provider"}},{kind:"MdxPage",name:"connect-and-get-accounts",route:"/integration-extension/sui/connect-and-get-accounts"},{kind:"MdxPage",name:"execute-move-call",route:"/integration-extension/sui/execute-move-call"},{kind:"MdxPage",name:"sign-and-execute-transaction",route:"/integration-extension/sui/sign-and-execute-transaction"}]}]},{kind:"Folder",name:"integration-mobile",route:"/integration-mobile",children:[{kind:"Meta",data:{intro:"Introduction",cosmostation:"Cosmostation",cosmoskit:{title:"Cosmos-Kit ↗",href:"https://docs.cosmoskit.com/integrating-wallets/cosmostation",newWindow:!0},walletconnect:"WalletConnect 1.0",walletconnect2:"WalletConnect 2.0",cosmjs:"Cosmjs"}},{kind:"MdxPage",name:"cosmjs",route:"/integration-mobile/cosmjs"},{kind:"MdxPage",name:"cosmostation",route:"/integration-mobile/cosmostation"},{kind:"MdxPage",name:"intro",route:"/integration-mobile/intro"},{kind:"Folder",name:"walletconnect",route:"/integration-mobile/walletconnect",children:[{kind:"Meta",data:{connect:"Connect",accounts:"Accounts","sign-tx":"Sign Transaction"}},{kind:"MdxPage",name:"accounts",route:"/integration-mobile/walletconnect/accounts"},{kind:"MdxPage",name:"connect",route:"/integration-mobile/walletconnect/connect"},{kind:"MdxPage",name:"sign-tx",route:"/integration-mobile/walletconnect/sign-tx"}]},{kind:"MdxPage",name:"walletconnect2",route:"/integration-mobile/walletconnect2"}]},{kind:"Folder",name:"overview",route:"/overview",children:[{kind:"Meta",data:{extension:"Extension",mobile:"Mobile Wallet"}},{kind:"Folder",name:"extension",route:"/overview/extension",children:[{kind:"Meta",data:{intro:"Introduction",account:"Account","transfer-coins":"Transfer Coins",chains:"Chains",dapps:"Dapps",settings:"Settings"}},{kind:"Folder",name:"account",route:"/overview/extension/account",children:[{kind:"Meta",data:{intro:"Introduction","add-account":"Add Account","add-ledger-account":"Add Ledger Account"}},{kind:"MdxPage",name:"add-account",route:"/overview/extension/account/add-account"},{kind:"MdxPage",name:"add-ledger-account",route:"/overview/extension/account/add-ledger-account"},{kind:"MdxPage",name:"intro",route:"/overview/extension/account/intro"}]},{kind:"MdxPage",name:"chains",route:"/overview/extension/chains"},{kind:"MdxPage",name:"dapps",route:"/overview/extension/dapps"},{kind:"MdxPage",name:"intro",route:"/overview/extension/intro"},{kind:"MdxPage",name:"settings",route:"/overview/extension/settings"},{kind:"MdxPage",name:"transfer-coins",route:"/overview/extension/transfer-coins"}]},{kind:"MdxPage",name:"mobile",route:"/overview/mobile"}]}],flexsearch:{codeblocks:!0},title:"Integrate cosmjs"},pageNextRoute:"/integration-mobile/cosmjs",nextraLayout:i.ZP,themeConfig:r.Z};n.default=(0,t.j)(c)}},function(e){e.O(0,[9774,3331,2888,179],function(){return e(e.s=2553)}),_N_E=e.O()}]);