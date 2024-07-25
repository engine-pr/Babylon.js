//import { NodeMaterialBlockConnectionPointTypes } from "../../Enums/nodeMaterialBlockConnectionPointTypes";
import type { NodeMaterialBuildState } from "../../nodeMaterialBuildState";
//import type { NodeMaterialConnectionPoint } from "../../nodeMaterialBlockConnectionPoint";
import { RegisterClass } from "../../../../Misc/typeStore";
//import type { Scene } from "../../../../scene";
import { StatementBlock } from "./statementBlock";



export class IfStatementBlock extends StatementBlock {

    public constructor(name: string) {
        super(name);

       // this.registerInput("condition", NodeMaterialBlockConnectionPointTypes.AutoDetect, true);
       // this.registerOutput("block", NodeMaterialBlockConnectionPointTypes.Statement);
    }

    /**
     * Gets the current class name
     * @returns the class name
     */
    public override getClassName() {
        return "IfStatementBlock";
    }

    /**
     * Gets the first operand component
     */
    /*public get condition(): NodeMaterialConnectionPoint {
        return this._inputs[1];
    }*/


    /**
     * Gets the output component
     */
    /*public get block(): NodeMaterialConnectionPoint {
        return this._outputs[1];
    }*/

    protected override _buildBlock(state: NodeMaterialBuildState) {
        super._buildBlock(state);

       // const block = this._outputs[0];
      

        return this;
    }


    protected override _dumpPropertiesCode() {
        return "";
    }
    protected override _buildStatment(state: NodeMaterialBuildState): string {
        return ""
    }
}

RegisterClass("BABYLON.IfStatementBlock", IfStatementBlock);
