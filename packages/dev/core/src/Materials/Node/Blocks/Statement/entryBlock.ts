import { NodeMaterialBlock } from "../../nodeMaterialBlock";
import { NodeMaterialBlockConnectionPointTypes } from "../../Enums/nodeMaterialBlockConnectionPointTypes";
import type { NodeMaterialBuildState } from "../../nodeMaterialBuildState";
import type { NodeMaterialConnectionPoint } from "../../nodeMaterialBlockConnectionPoint";
import { NodeMaterialBlockTargets } from "../../Enums/nodeMaterialBlockTargets";
import { RegisterClass } from "../../../../Misc/typeStore";

export class EntryBlock extends NodeMaterialBlock {
    public constructor(name: string) {
        super(name, NodeMaterialBlockTargets.Neutral);

    //    this.registerOutput("next2", NodeMaterialBlockConnectionPointTypes.Float)
        this.registerOutput("next2", NodeMaterialBlockConnectionPointTypes.Statement);
        this._outputs[0].acceptedConnectionPointTypes = [NodeMaterialBlockConnectionPointTypes.Statement];
    }

    /**
     * Gets the current class name
     * @returns the class name
     */
    public override getClassName() {
        return "EntryBlock";
    }

    /**
     * Gets the output component
     */
    public get next2(): NodeMaterialConnectionPoint {
        return this._outputs[0];
    }
   // public get next2(): NodeMaterialConnectionPoint {
  //      return this._outputs[1];
 //   }

    protected override _buildBlock(state: NodeMaterialBuildState) {
        super._buildBlock(state);

     //   const output = this._outputs[0];
   //     state.compilationString += ""//`_buildStatment(state))\n` + state._declareOutput(output);

        return this;
    }
    protected override _dumpPropertiesCode() {
        return "";
    }
}

RegisterClass("BABYLON.EntryBlock", EntryBlock);
