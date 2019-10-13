import React from "react";

/**Importação do Compomentes que formam um produto */
import { ImageComponent } from "./ImageComponent";
import { ButtonComponent } from "./ButtonComponent";
import { PriceComponent } from "./PriceComponent";

export function ProductComponent(props) {
  return (
    <div>
      <ImageComponent image="kindle.jpeg" />
      <PriceComponent price="$ 444" />
      <ButtonComponent id="Add" />
    </div>
  );
}
