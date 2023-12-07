// Generated by Ignite ignite.com/cli
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry } from "@cosmjs/proto-signing";
import { msgTypes } from './registry';
import { Api } from "./rest";
import { MsgTripCircuitBreaker } from "./types/cosmos/circuit/v1/tx";
import { QueryAccountRequest } from "./types/cosmos/circuit/v1/query";
import { QueryAccountsRequest } from "./types/cosmos/circuit/v1/query";
import { AccountsResponse } from "./types/cosmos/circuit/v1/query";
import { MsgAuthorizeCircuitBreakerResponse } from "./types/cosmos/circuit/v1/tx";
import { GenesisAccountPermissions } from "./types/cosmos/circuit/v1/types";
import { QueryDisabledListRequest } from "./types/cosmos/circuit/v1/query";
import { DisabledListResponse } from "./types/cosmos/circuit/v1/query";
import { MsgResetCircuitBreaker } from "./types/cosmos/circuit/v1/tx";
import { GenesisState } from "./types/cosmos/circuit/v1/types";
import { AccountResponse } from "./types/cosmos/circuit/v1/query";
import { MsgTripCircuitBreakerResponse } from "./types/cosmos/circuit/v1/tx";
import { MsgResetCircuitBreakerResponse } from "./types/cosmos/circuit/v1/tx";
import { Permissions } from "./types/cosmos/circuit/v1/types";
import { MsgAuthorizeCircuitBreaker } from "./types/cosmos/circuit/v1/tx";
export { MsgTripCircuitBreaker, QueryAccountRequest, QueryAccountsRequest, AccountsResponse, MsgAuthorizeCircuitBreakerResponse, GenesisAccountPermissions, QueryDisabledListRequest, DisabledListResponse, MsgResetCircuitBreaker, GenesisState, AccountResponse, MsgTripCircuitBreakerResponse, MsgResetCircuitBreakerResponse, Permissions, MsgAuthorizeCircuitBreaker };
export const registry = new Registry(msgTypes);
function getStructure(template) {
    const structure = { fields: [] };
    for (let [key, value] of Object.entries(template)) {
        let field = { name: key, type: typeof value };
        structure.fields.push(field);
    }
    return structure;
}
const defaultFee = {
    amount: [],
    gas: "200000",
};
export const txClient = ({ signer, prefix, addr } = { addr: "http://localhost:26657", prefix: "cosmos" }) => {
    return {
        async sendMsgTripCircuitBreaker({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgTripCircuitBreaker: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgTripCircuitBreaker({ value: MsgTripCircuitBreaker.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgTripCircuitBreaker: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAccountRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAccountRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAccountRequest({ value: QueryAccountRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAccountRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryAccountsRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryAccountsRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryAccountsRequest({ value: QueryAccountsRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryAccountsRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendAccountsResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendAccountsResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.accountsResponse({ value: AccountsResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendAccountsResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgAuthorizeCircuitBreakerResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgAuthorizeCircuitBreakerResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgAuthorizeCircuitBreakerResponse({ value: MsgAuthorizeCircuitBreakerResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgAuthorizeCircuitBreakerResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGenesisAccountPermissions({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGenesisAccountPermissions: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.genesisAccountPermissions({ value: GenesisAccountPermissions.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGenesisAccountPermissions: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendQueryDisabledListRequest({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendQueryDisabledListRequest: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.queryDisabledListRequest({ value: QueryDisabledListRequest.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendQueryDisabledListRequest: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendDisabledListResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendDisabledListResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.disabledListResponse({ value: DisabledListResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendDisabledListResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgResetCircuitBreaker({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgResetCircuitBreaker: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgResetCircuitBreaker({ value: MsgResetCircuitBreaker.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgResetCircuitBreaker: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendGenesisState({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendGenesisState: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.genesisState({ value: GenesisState.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendGenesisState: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendAccountResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendAccountResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.accountResponse({ value: AccountResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendAccountResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgTripCircuitBreakerResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgTripCircuitBreakerResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgTripCircuitBreakerResponse({ value: MsgTripCircuitBreakerResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgTripCircuitBreakerResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgResetCircuitBreakerResponse({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgResetCircuitBreakerResponse: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgResetCircuitBreakerResponse({ value: MsgResetCircuitBreakerResponse.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgResetCircuitBreakerResponse: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendPermissions({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendPermissions: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.permissions({ value: Permissions.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendPermissions: Could not broadcast Tx: ' + e.message);
            }
        },
        async sendMsgAuthorizeCircuitBreaker({ value, fee, memo }) {
            if (!signer) {
                throw new Error('TxClient:sendMsgAuthorizeCircuitBreaker: Unable to sign Tx. Signer is not present.');
            }
            try {
                const { address } = (await signer.getAccounts())[0];
                const signingClient = await SigningStargateClient.connectWithSigner(addr, signer, { registry });
                let msg = this.msgAuthorizeCircuitBreaker({ value: MsgAuthorizeCircuitBreaker.fromPartial(value) });
                return await signingClient.signAndBroadcast(address, [msg], fee ? fee : defaultFee, memo);
            }
            catch (e) {
                throw new Error('TxClient:sendMsgAuthorizeCircuitBreaker: Could not broadcast Tx: ' + e.message);
            }
        },
        msgTripCircuitBreaker({ value }) {
            try {
                return { typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreaker", value: MsgTripCircuitBreaker.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgTripCircuitBreaker: Could not create message: ' + e.message);
            }
        },
        queryAccountRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.circuit.v1.QueryAccountRequest", value: QueryAccountRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAccountRequest: Could not create message: ' + e.message);
            }
        },
        queryAccountsRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.circuit.v1.QueryAccountsRequest", value: QueryAccountsRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryAccountsRequest: Could not create message: ' + e.message);
            }
        },
        accountsResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.circuit.v1.AccountsResponse", value: AccountsResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:AccountsResponse: Could not create message: ' + e.message);
            }
        },
        msgAuthorizeCircuitBreakerResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreakerResponse", value: MsgAuthorizeCircuitBreakerResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgAuthorizeCircuitBreakerResponse: Could not create message: ' + e.message);
            }
        },
        genesisAccountPermissions({ value }) {
            try {
                return { typeUrl: "/cosmos.circuit.v1.GenesisAccountPermissions", value: GenesisAccountPermissions.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GenesisAccountPermissions: Could not create message: ' + e.message);
            }
        },
        queryDisabledListRequest({ value }) {
            try {
                return { typeUrl: "/cosmos.circuit.v1.QueryDisabledListRequest", value: QueryDisabledListRequest.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:QueryDisabledListRequest: Could not create message: ' + e.message);
            }
        },
        disabledListResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.circuit.v1.DisabledListResponse", value: DisabledListResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:DisabledListResponse: Could not create message: ' + e.message);
            }
        },
        msgResetCircuitBreaker({ value }) {
            try {
                return { typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreaker", value: MsgResetCircuitBreaker.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgResetCircuitBreaker: Could not create message: ' + e.message);
            }
        },
        genesisState({ value }) {
            try {
                return { typeUrl: "/cosmos.circuit.v1.GenesisState", value: GenesisState.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:GenesisState: Could not create message: ' + e.message);
            }
        },
        accountResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.circuit.v1.AccountResponse", value: AccountResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:AccountResponse: Could not create message: ' + e.message);
            }
        },
        msgTripCircuitBreakerResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.circuit.v1.MsgTripCircuitBreakerResponse", value: MsgTripCircuitBreakerResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgTripCircuitBreakerResponse: Could not create message: ' + e.message);
            }
        },
        msgResetCircuitBreakerResponse({ value }) {
            try {
                return { typeUrl: "/cosmos.circuit.v1.MsgResetCircuitBreakerResponse", value: MsgResetCircuitBreakerResponse.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgResetCircuitBreakerResponse: Could not create message: ' + e.message);
            }
        },
        permissions({ value }) {
            try {
                return { typeUrl: "/cosmos.circuit.v1.Permissions", value: Permissions.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:Permissions: Could not create message: ' + e.message);
            }
        },
        msgAuthorizeCircuitBreaker({ value }) {
            try {
                return { typeUrl: "/cosmos.circuit.v1.MsgAuthorizeCircuitBreaker", value: MsgAuthorizeCircuitBreaker.fromPartial(value) };
            }
            catch (e) {
                throw new Error('TxClient:MsgAuthorizeCircuitBreaker: Could not create message: ' + e.message);
            }
        },
    };
};
export const queryClient = ({ addr: addr } = { addr: "http://localhost:1317" }) => {
    return new Api({ baseURL: addr });
};
class SDKModule {
    constructor(client) {
        this.registry = [];
        this.query = queryClient({ addr: client.env.apiURL });
        this.updateTX(client);
        this.structure = {};
        client.on('signer-changed', (signer) => {
            this.updateTX(client);
        });
    }
    updateTX(client) {
        const methods = txClient({
            signer: client.signer,
            addr: client.env.rpcURL,
            prefix: client.env.prefix ?? "cosmos",
        });
        this.tx = methods;
        for (let m in methods) {
            this.tx[m] = methods[m].bind(this.tx);
        }
    }
}
;
const IgntModule = (test) => {
    return {
        module: {
            CosmosCircuitV1: new SDKModule(test)
        },
        registry: msgTypes
    };
};
export default IgntModule;