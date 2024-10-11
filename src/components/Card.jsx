import React from "react";

const Card = ({title, body }) => {

	return (
		<div className="bg-gradient-to-r from-yellow-200 to-yellow-100 rounded-lg p-4 m-8 w-96 h-96 shadow-lg shadow-orange-400">
			<h2 className="font-bold text-2xl mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
				{title}
			</h2>
			<p className="text-lg">
				{body}
			</p>
		</div>
	);
};

export default Card;
