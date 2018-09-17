/**
 * A ownership transfer event has been occured for a product
 * @param {org.meditracker.Owner} ownerShipTransfer - the ownerShipTransfer transaction
 * @transaction
 */

async function ownerShipTransfer(ownerShipTransfer) {  // eslint-disable-line no-unused-vars

    const product = ownerShipTransfer.product;

    console.log('Adding temperature ' + ownerShipTransfer.product + ' to shipment ' + product.$identifier);

    if (product.owners) {
        product.owners.push(ownerShipTransfer);
    } else {
        product.owners = [ownerShipTransfer];
    }

    // add the temp reading to the shipment
    const productRegistry = await getAssetRegistry('org.meditracker.Product');
    await productRegistry.update(product);
}
