
export function getDeviceData():Array<any>{
  let items:Array<any> = [];

  let deviceNames = ['USA', 'Sweden', 'Finland'];
  let communicationTypes = ['Apple Inc', 'Nokia', 'IKEA']

  for(let i=0;i<deviceNames.length;i++){
    items.push({
      deviceName: deviceNames[i],
      communicationType: communicationTypes[i]
    })
  }
  
  return items;
}

export function getCertStats():any{
  let stats = {
    open: 0,
    critical: 7,
    failed: 1,
    total: 20,
    authenticated: 23
  };
  return stats;
}