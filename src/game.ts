import { getConnectedPlayers, getPlayersInScene } from "@decentraland/Players" // can be removed
import { getUserPublicKey, getUserData } from "@decentraland/Identity" // getUserPublicKey can be removed
import { getParcel } from '@decentraland/ParcelIdentity'
import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../b88efbbf-2a9a-47b4-86e1-e38ecc2b433b/src/item"
import * as utils from '@dcl/ecs-scene-utils'
import Script2 from "../901e4555-8743-49bb-854c-c8b354a3e3e1/src/item"


const sendAnalyticsEvent = (tag: any, metadata: any) => {
  // getting parcel info
  executeTask(async () => {
    const parcel = await getParcel()
    // log('parcels: ', parcel.land.sceneJsonData.scene.parcels)
    const parcels = parcel.land.sceneJsonData.scene.parcels

    // log('spawnpoints: ', parcel.land.sceneJsonData.spawnPoints)
    const spawnpoints = parcel.land.sceneJsonData.spawnPoints

    // log('base parcel: ', parcel.land.sceneJsonData.scene.base)
    const baseParcel = parcel.land.sceneJsonData.scene.base
    const sceneJsonData = parcel.land.sceneJsonData

    let BASE_URL = 'https://wemeta-analytics.herokuapp.com/event'
    getUserData().then(data => {
      const player = data;
    fetch(BASE_URL, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({"tag": tag, "player": player, "data":metadata, scene: {spawnpoints, parcels, baseParcel, sceneJsonData}})
    });
     })
  });
  }

// shows players connected in scene
onPlayerConnectedObservable.add((player) => {
  // log("player entered: ", player.userId)
  sendAnalyticsEvent("player_connected", player)
})

// shows players disconnected in scene
onPlayerDisconnectedObservable.add((player) => {
  // log("player left: ", player.userId)
  sendAnalyticsEvent("player_disconnected", player)
})

// shows player entered scene
onEnterSceneObservable.add((player) => {
  // log("player entered scene: ", player.userId)
  sendAnalyticsEvent("player_entered_scene", player)
})

// shows player left scene
onLeaveSceneObservable.add((player) => {
  // log("player left scene: ", player.userId)
  sendAnalyticsEvent("player_left_scene", player)
})

// idle
onIdleStateChangedObservable.add(({ isIdle }) => {
  // log("Idle State change: ", isIdle)
   if(isIdle) sendAnalyticsEvent("idle_state_true", isIdle)
   else sendAnalyticsEvent("idle_state_false", isIdle)
})

// player animation
onPlayerExpressionObservable.add(({ expressionId }) => {
  // log("Expression: ", expressionId)
  sendAnalyticsEvent("player_expression", expressionId)
})

// fetch player data
getUserData().then((data) => {
  // log(data)
  sendAnalyticsEvent("user_data", data)
})

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("c9b17021-765c-4d9a-9966-ce93a9c323d1/FloorBaseGrass_01/FloorBaseGrass_01.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const entity5 = new Entity('entity5')
engine.addEntity(entity5)
entity5.setParent(_scene)
entity5.addComponentOrReplace(gltfShape)
const transform6 = new Transform({
  position: new Vector3(8, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity5.addComponentOrReplace(transform6)

const entity6 = new Entity('entity6')
engine.addEntity(entity6)
entity6.setParent(_scene)
entity6.addComponentOrReplace(gltfShape)
const transform7 = new Transform({
  position: new Vector3(24, 0, 40),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity6.addComponentOrReplace(transform7)

const sportsCastleWithCollider = new Entity('sportsCastleWithCollider')
engine.addEntity(sportsCastleWithCollider)
sportsCastleWithCollider.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(15, 0.3267383575439453, 23.5),
  rotation: new Quaternion(1.9792379591683637e-15, 0.7071067690849304, -8.429368847373553e-8, -0.7071068286895752),
  scale: new Vector3(1, 1, 1)
})
sportsCastleWithCollider.addComponentOrReplace(transform8)
const gltfShape2 = new GLTFShape("ca08713f-4f26-427f-aca2-fea86c2a444f/sports castle 14 with colliders.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
sportsCastleWithCollider.addComponentOrReplace(gltfShape2)

//solar punk link
const externalLink = new Entity('externalLink')
engine.addEntity(externalLink)
externalLink.setParent(_scene)
const transform8 = new Transform({
  position: new Vector3(11.5, 0, 31),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(9, 5.9, 1)
})
externalLink.addComponentOrReplace(transform8)


// culture jam link
const externalLink2 = new Entity('externalLink2')
engine.addEntity(externalLink2)
externalLink2.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(16.57, 0, 39),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.7, 5.9, 1)
})
externalLink2.addComponentOrReplace(transform9)

// metafactory link
const externalLink3 = new Entity('externalLink3')
engine.addEntity(externalLink3)
externalLink3.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(4.3, 3.2, 20.5),
  rotation: new Quaternion(90, 0, 90, 1),
  scale: new Vector3(6.3, 1, 1)
})
externalLink3.addComponentOrReplace(transform10)

//ethdenver twitch stream link
const externalLink4 = new Entity('externalLink4')
engine.addEntity(externalLink4)
externalLink4.setParent(_scene)
const transform11 = new Transform({
  position: new Vector3(30, 3, 20),
  rotation: new Quaternion(90, 0, 90, 1),
  scale: new Vector3(4, 2, 1)
})
externalLink4.addComponentOrReplace(transform11)

//culture jam link 2
const externalLink5 = new Entity('externalLink5')
engine.addEntity(externalLink5)
externalLink5.setParent(_scene)
const transform12 = new Transform({
  position: new Vector3(12.3, 0, 31.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(10, 5.5, 1)
})
externalLink5.addComponentOrReplace(transform12)

//culture jam link 3
const externalLink6 = new Entity('externalLink6')
engine.addEntity(externalLink6)
externalLink6.setParent(_scene)
const transform13 = new Transform({
  position: new Vector3(4.5, 0, 41.4),
  rotation: new Quaternion(90, 0, 90, 1),
  scale: new Vector3(5.3, 5.5, 1)
})
externalLink6.addComponentOrReplace(transform13)

//culture jam link 4
const externalLink7 = new Entity('externalLink7')
engine.addEntity(externalLink7)
externalLink7.setParent(_scene)
const transform14 = new Transform({
  position: new Vector3(11, 0, 44.1),
  rotation: new Quaternion(90, 0, 0, 1),
  scale: new Vector3(12, 5.5, 1)
})
externalLink7.addComponentOrReplace(transform14)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
script1.init(options)
script1.spawn(externalLink, {"url":"https://doingud.com/exhibition/solar-punk-exhibition-b26efbd6-c1b5-4572-9763-b6a4292dbfdb","name":"SolarPunk Exhibition"}, createChannel(channelId, externalLink, channelBus))
script1.spawn(externalLink2, {"url":"https://doingud.com/exhibition/culture-jam-ethdenver-2022-exhibition-3df2a2c4-ad63-4e23-9a6d-a34be3877e55","name":"Culture Jam ETHDenver"}, createChannel(channelId, externalLink2, channelBus))
script1.spawn(externalLink3, {"url":"https://metafactory.ai","name":"MetaFactory"}, createChannel(channelId, externalLink3, channelBus))
script1.spawn(externalLink4, {"url":"https://www.twitch.tv/ethereumdenver","name":"ETHDenver Stream"}, createChannel(channelId, externalLink4, channelBus))
script1.spawn(externalLink5, {"url":"https://doingud.com/exhibition/culture-jam-ethdenver-2022-exhibition-3df2a2c4-ad63-4e23-9a6d-a34be3877e55","name":"Culture Jam ETHDenver"}, createChannel(channelId, externalLink5, channelBus))
script1.spawn(externalLink6, {"url":"https://doingud.com/exhibition/culture-jam-ethdenver-2022-exhibition-3df2a2c4-ad63-4e23-9a6d-a34be3877e55","name":"Culture Jam ETHDenver"}, createChannel(channelId, externalLink6, channelBus))
script1.spawn(externalLink7, {"url":"https://doingud.com/exhibition/culture-jam-ethdenver-2022-exhibition-3df2a2c4-ad63-4e23-9a6d-a34be3877e55","name":"Culture Jam ETHDenver"}, createChannel(channelId, externalLink7, channelBus))


const radio = new Entity('radio')
engine.addEntity(radio)
radio.setParent(_scene)
const transform15 = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
radio.addComponentOrReplace(transform14)


const script2 = new Script2()
script2.init(options)
script2.spawn(radio, {"startOn":true,"loop":true,"volume":0.1,"onClickText":"Radio On/Off","onClick":[{"entityName":"radio","actionId":"toggle","values":{}}],"customStation":"https://gateway.pinata.cloud/ipfs/QmastWtdJifHK9jWbCG2t3AoGTKbjYp82FoamwZdpNhjeE"}, createChannel(channelId, radio, channelBus))





// const musicbg = new Entity()

// // Create AudioClip object, holding audio file
// const clip = new AudioClip("music.mp3")

// // Create AudioSource component, referencing `clip`
// const source = new AudioSource(clip)

// // Add AudioSource component to entity
// musicbg.addComponent(source)

// // Play sound
// source.loop = true

// source.playing = true
// source.volume = 1
