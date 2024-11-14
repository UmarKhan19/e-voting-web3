import React from "react";

const Show = ({
	when,
	children,
}: {
	when: boolean;
	children: React.ReactNode;
}) => {
	return when ? children : null;
};

export default Show;
