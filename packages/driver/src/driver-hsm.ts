import { Driver } from './driver'
import { Net, Wallet } from './interfaces'
import { Module } from 'graphene-pk11'

export class DriverHSM extends Driver {
    readonly libPath: string

    constructor(
        net: Net,
        genesis: Connex.Thor.Block,
        libPath: string,
        initialHead?: Connex.Thor.Status['head'],
        readonly wallet?: Wallet
    ) {
        super(net, genesis, initialHead, wallet)
        this.libPath = libPath
    }

    public signTx(
        msg: Connex.Vendor.TxMessage,
        options: Connex.Driver.TxOptions
    ): Promise<Connex.Vendor.TxResponse> {
        Module.load(this.libPath);
        throw new Error('Not implemented')
    }
    public signCert(
        msg: Connex.Vendor.CertMessage,
        options: Connex.Driver.CertOptions
    ): Promise<Connex.Vendor.CertResponse> {
        throw new Error('Not implemented')
    }

}