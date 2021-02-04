import React from "react";
import DraggColorBox from "./DraggColorBox";
import { SortableContainer } from "react-sortable-hoc";

const DraggableColorList = SortableContainer(({ colors, removeColor }) => {
	return (
		<div style={{ height: "100%" }}>
			{colors.map((color, i) => (
				<DraggColorBox
					index={i}
					color={color.color}
					name={color.name}
					key={color.name}
					id={color.name}
					handleClick={() => removeColor(color.name)}
				/>
			))}
		</div>
	);
});

export default DraggableColorList;
