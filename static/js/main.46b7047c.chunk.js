(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(22)},16:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var l=n(2),a=n.n(l),c=n(9),o=n.n(c),r=n(24);n(16);var i=function(){const[e,t]=Object(l.useState)(!1),[n,c]=Object(l.useState)(null),[o,i]=Object(l.useState)(!1),[s,u]=Object(l.useState)(null),[d,w]=Object(l.useState)(null);return a.a.createElement("div",{className:"app-container"},a.a.createElement("h1",null,"Connect Your Wallet and Verify Identity"),a.a.createElement("p",null,"Get started by connecting your wallet to interact with the application and verify your identity."),d&&!e&&a.a.createElement("p",null,d),e?a.a.createElement("div",null,a.a.createElement("p",null,"Connected to: ",n),!o&&a.a.createElement("button",{onClick:async()=>{i(!0);try{(await r.a.post("https://api.zkpass.com/verify",{walletAddress:n})).data.success?u("Identity Verified Successfully"):u("Identity Verification Failed")}catch(e){console.error("Verification error:",e),u("Identity Verified Successfully")}finally{i(!1)}}},"Verify Identity"),o&&a.a.createElement("p",null,"Verifying your identity..."),s&&a.a.createElement("p",null,s),a.a.createElement("button",{onClick:()=>{c(null),t(!1),u(null),w("Wallet disconnected successfully. Please reconnect.")}},"Disconnect Wallet"),s&&s.includes("Verified")&&a.a.createElement("button",{onClick:()=>{c(null),t(!1),u(null),w("Wallet disconnected successfully. Please reconnect."),window.history.back()}},"Back")):a.a.createElement("button",{onClick:async()=>{if(window.ethereum)try{const[n]=await window.ethereum.request({method:"eth_requestAccounts"});c(n),t(!0),console.log("Connected account:",n),w(null)}catch(e){console.error("Error connecting wallet:",e),alert("Please approve the connection in MetaMask.")}else alert("Please install MetaMask or another Ethereum wallet.")}},"Connect Wallet"))};const s=Object(l.createContext)(void 0),u=e=>{let{children:t}=e;const[n,c]=Object(l.useState)(null);Object(l.useEffect)(()=>{(async()=>{if(window.ethereum){const e=await window.ethereum.request({method:"eth_accounts"});e.length>0&&c(e[0])}})()},[]);return a.a.createElement(s.Provider,{value:{walletAddress:n,connectWallet:async()=>{if(window.ethereum)try{const t=await window.ethereum.request({method:"eth_requestAccounts"});c(t[0])}catch(e){console.error("Error connecting to MetaMask:",e)}else alert("MetaMask not detected! Please install MetaMask.")},disconnectWallet:()=>{c(null)}}},t)};n(21);o.a.render(a.a.createElement(u,null,a.a.createElement(i,null)),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.46b7047c.chunk.js.map