import { Driver } from './driver'
import { Net } from './interfaces'
import { Slot, Module, Session } from 'graphene-pk11'

export class DriverHSM extends Driver {
    readonly slot: Slot

    constructor(
        net: Net,
        genesis: Connex.Thor.Block,
        readonly libPath: string,
        readonly pkcs11Type: string,
        readonly slotIndex: number
    ) {
        super(net, genesis)
        const module = Module.load(libPath, pkcs11Type);
        module.initialize()
        this.slot = module.getSlots(slotIndex)
    }

    public signTx(
        msg: Connex.Vendor.TxMessage,
        options: Connex.Driver.TxOptions
    ): Promise<Connex.Vendor.TxResponse> {
        const session: Session = this.slot.open()
        throw new Error('Not implemented')
    }
    public signCert(
        msg: Connex.Vendor.CertMessage,
        options: Connex.Driver.CertOptions
    ): Promise<Connex.Vendor.CertResponse> {
        throw new Error('Not implemented')
    }

}