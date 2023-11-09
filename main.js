import './style.css'
import OBR, { buildText,buildShape } from "@owlbear-rodeo/sdk";

OBR.onReady(async()=>{

  const texto = await buildText()
  .width(100)
  .fillColor("red")
  .richText([
    {
      type: "paragraph",
      children: [{ text: "HP" }],
    },
  ])
  .build().attachedTo;

  const caixa = buildShape().width(100).height(20).shapeType("RECTANGLE").build()

  OBR.scene.items.addItems([texto,caixa]);

  
  
})




