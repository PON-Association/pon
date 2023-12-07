import { GeneratedType } from "@cosmjs/proto-signing";
import { Params } from "./types/pon/pon/params";
import { MsgUpdateParams } from "./types/pon/pon/tx";
import { QueryParamsRequest } from "./types/pon/pon/query";
import { GenesisState } from "./types/pon/pon/genesis";
import { MsgUpdateParamsResponse } from "./types/pon/pon/tx";
import { QueryParamsResponse } from "./types/pon/pon/query";

const msgTypes: Array<[string, GeneratedType]>  = [
    ["/pon.pon.Params", Params],
    ["/pon.pon.MsgUpdateParams", MsgUpdateParams],
    ["/pon.pon.QueryParamsRequest", QueryParamsRequest],
    ["/pon.pon.GenesisState", GenesisState],
    ["/pon.pon.MsgUpdateParamsResponse", MsgUpdateParamsResponse],
    ["/pon.pon.QueryParamsResponse", QueryParamsResponse],
    
];

export { msgTypes }