/**
 * create token and send to templateTags
 */
module.exports.templateTags = [{
    name: 'merTok',
    displayName: 'Merchant Token',
    description: 'Generate merchant token',
    args: [
        {
            displayName: 'Time stamp',
            description: 'format timestamp',
            type: 'string',
            defaultValue: 0
        },
        {
            displayName: 'Merchant Id',
            description: 'iMid',
            type: 'string',
            defaultValue: 0
        },
        {
            displayName: 'Merchant Key',
            description: 'mkey',
            type: 'string',
            defaultValue: 0
        },
        {
            displayName: 'Amount',
            description: 'Order amount',
            type: 'number',
            defaultValue: 0
        }, 
        {
            displayName: 'Ref No.',
            description: 'Reference number',
            type: 'string',
            defaultValue: ''
        }
    ],
    async run (context, timeStamp, iMid, mkey, amt, refno) {

        var cryptlib = require('crypto-js');

        //Generate merchantToken//
        var merchantData = timeStamp + iMid + refno + amt + mkey;
        var merchantToken = cryptlib.SHA256(merchantData).toString(cryptlib.enc.Hex);

        return merchantToken;
    }
}];
