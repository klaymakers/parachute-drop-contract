const ethers = require('ethers');

/**
 * Method call transaction sender
*/

exports.varNameToString = varObj => Object.keys(varObj)[0]  // extract variable name string from variable object.

exports.sendTransaction = (promise, methodPromiseName) => {
  promise.then(function(transaction) {
    console.log("=======================================================");
    console.log('[output]', methodPromiseName, '\n');
    console.log(transaction);

    // BigNumber to KLAY format
    if (transaction instanceof ethers.BigNumber) {
        console.log('>>> KLAY format: ', ethers.utils.formatEther(transaction));
    }
  })
}