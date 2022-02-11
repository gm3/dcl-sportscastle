
// Base
const base = new Entity()
base.addComponent(new GLTFShape("models/baseDarkWithCollider.glb"))
base.addComponent(new Transform({ scale: new Vector3(2, 1, 2)}))
engine.addEntity(base)


const screenBody = new Entity()
screenBody.addComponent(new GLTFShape("models/screen.glb"))
screenBody.addComponent(new Transform({ position: new Vector3(16, 0.05, 16)}))
engine.addEntity(screenBody)

// Screen
const screenTransform = new Entity()
screenTransform.addComponent(new Transform({ position: new Vector3(0, 6.15, 5) }))
screenTransform.getComponent(Transform).rotate(Vector3.Right(), -15)
screenTransform.setParent(screenBody)

const screen = new Entity()
screen.addComponent(new PlaneShape())
screen.addComponent(new Transform({ scale: new Vector3(19.2, 10.8, 1) }))
screen.getComponent(Transform).rotate(Vector3.Up(), 180)
screen.setParent(screenTransform)

screenTransform.getComponent(Transform).scale.setAll(0.625) // You can change the scale of the screen here...

// Video stream link from Vimeo
const videoClip = new VideoClip("https://player.vimeo.com/external/676023965.m3u8?s=eee56ff6be46b70a749005aa9e99a0bae3d8c447")
const videoTexture = new VideoTexture(videoClip)
videoTexture.play()
videoTexture.loop = true

// Adjust screen material to increase the brightness and clarity
const screenMaterial = new Material()
screenMaterial.albedoTexture = videoTexture
screenMaterial.emissiveTexture = videoTexture
screenMaterial.emissiveColor = Color3.White()
screenMaterial.emissiveIntensity = 0.6
screenMaterial.roughness = 1.0
screen.addComponent(screenMaterial)

