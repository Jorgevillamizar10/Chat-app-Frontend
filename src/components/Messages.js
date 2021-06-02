import React from "react";
import { IncomingMessage } from "./IncomingMessage";
import { OutMessage } from "./OutMessage";
import { SendMessage } from "./SendMessage";

export const Messages = () => {
	return (
		<div className="mesgs">
			<div className="msg_history">
				<IncomingMessage />

				<OutMessage />
			</div>
			<SendMessage />
		</div>
	);
};
