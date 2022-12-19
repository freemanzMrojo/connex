import { DriverHSM } from './driver-hsm'
 
//TODO implement tests
const softHSMLibPath: string = '/usr/local/lib/softhsm/libsofthsm2.so'
const pkcs11Type: string = 'SoftHSM'
const slotIndex: number = 0

let driverHSM: DriverHSM

beforeAll(() => {
  const netMock = {
    baseURL: 'baseURL',
    http: jest.fn().mockReturnValue(Promise.resolve({ method: 'GET', path: 'path' })),
    openWebSocketReader: jest.fn().mockReturnValue(Promise.resolve({ path: 'path' }))
  }

  const block = {
    id: 'id',
    number: 1,
    size: 2,
    parentID: 'parentID',
    timestamp: 1234,
    gasLimit: 12,
    beneficiary: 'beneficiary',
    gasUsed: 6,
    totalScore: 10,
    txsRoot: 'txsRoot',
    stateRoot: 'stateRoot',
    receiptsRoot: 'receiptsRoot',
    signer: 'signer',
    transactions: ['tx1'],
    isTrunk: false,
    revision: 'revision',
    get: jest.fn().mockReturnValue(Promise.resolve())
  }

  driverHSM = new DriverHSM(netMock, block, softHSMLibPath, pkcs11Type, slotIndex)
});


describe('testing index file', () => {
  test('empty string should result in zero', () => {
    expect(0).toBe(0);
  });
});