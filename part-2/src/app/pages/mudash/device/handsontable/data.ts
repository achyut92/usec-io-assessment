
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
