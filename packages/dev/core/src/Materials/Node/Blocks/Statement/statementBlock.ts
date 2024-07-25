import { NodeMaterialBlock } from "../../nodeMaterialBlock";
//import { NodeMaterialBlockConnectionPointTypes } from "../../Enums/nodeMaterialBlockConnectionPointTypes";
import type { NodeMaterialBuildState } from "../../nodeMaterialBuildState";
//import type { NodeMaterialConnectionPoint } from "../../nodeMaterialBlockConnectionPoint";
import { NodeMaterialBlockTargets } from "../../Enums/nodeMaterialBlockTargets";
import { RegisterClass } from "../../../../Misc/typeStore";
//import type { Scene } from "../../../../scene";

export abstract class StatementBlock extends NodeMaterialBlock {
    public constructor(name: string) {
        super(name, NodeMaterialBlockTargets.Neutral);
//
        //this.registerInput("prev", NodeMaterialBlockConnectionPointTypes.Statement);
     //   this.registerOutput("next", NodeMaterialBlockConnectionPointTypes.Statement);

      //  this.prev.acceptedConnectionPointTypes.push(NodeMaterialBlockConnectionPointTypes.Statement);
     //   this.next.acceptedConnectionPointTypes.push(NodeMaterialBlockConnectionPointTypes.Statement);
    }

    /**
     * Gets the current class name
     * @returns the class name
     */
  //  public override getClassName() {
  //      return "StatementBlock";
  //  }

    /**
     * Gets the first operand component
     */
  //  public get prev(): NodeMaterialConnectionPoint {
  //      return this._inputs[0];
  //  }

    /**
     * Gets the output component
     */
  //  public get next(): NodeMaterialConnectionPoint {
   //     return this._outputs[0];
   // }

    protected abstract _buildStatment(state: NodeMaterialBuildState): string;
    protected override _buildBlock(state: NodeMaterialBuildState) {
        super._buildBlock(state);

     //   const output = this._outputs[0];
        state.compilationString += ""//`_buildStatment(state))\n` + state._declareOutput(output);

        return this;
    }

    protected override _dumpPropertiesCode() {
        return "";
    }
}

RegisterClass("BABYLON.StatementBlock", StatementBlock);
