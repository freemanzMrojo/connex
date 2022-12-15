import { Driver } from './driver'

export class DriverHSM extends Driver {
    public signTx(
        msg: Connex.Vendor.TxMessage,
        options: Connex.Driver.TxOptions
    ): Promise<Connex.Vendor.TxResponse> {
        throw new Error('Not implemented')
    }
    public signCert(
        msg: Connex.Vendor.CertMessage,
        options: Connex.Driver.CertOptions
    ): Promise<Connex.Vendor.CertResponse> {
        throw new Error('Not implemented')
    }

}