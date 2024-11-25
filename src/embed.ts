// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0
import React, { useEffect, useState } from "react";

import { ExpandableSection, Spinner } from "@cloudscape-design/components";

/**
 * Props for the Chat component.
 * @interface
 */
export interface ChatProps {
	/** URL for the embedded chat. E.g. https://xxxxxx.chat.qbusiness.us-west-1.on.aws */
	embedUrl: string;

	/** Width of the embedded chat in pixels. Defaults to 600. */
	embedWidth?: number;

	/** Height of the embedded chat in pixels. Defaults to 650. */
	embedHeight?: number;

	/** Offset from the right side of the screen as a percentage. Defaults to 5%. */
	embedOffsetRightPc?: number;

	/** Text to display in the header of the chat component. Defaults to "Chat". */
	headerText?: string;

	/** Additional information to display in the header. Defaults to "Chat with us". */
	headerInfo?: string;
}

export default function Chat({
	embedUrl,
	embedWidth = 600,
	embedHeight = 650,
	embedOffsetRightPc = 5,
	headerText = "Chat",
	headerInfo = "Chat with us",
}: ChatProps) {
	const [isExpanded, setIsExpanded] = useState(true);
	const [isLoadingDelay, setIsLoadingDelay] = useState(true);

	const handleOnChange = (event: {
		detail: {
			expanded: boolean;
		};
	}) => {
		setIsExpanded(event.detail.expanded);
	};

	useEffect(() => {
		const loadingTimeout = setTimeout(() => {
			setIsLoadingDelay(false);
		}, 2000);

		return () => clearTimeout(loadingTimeout);
	}, [embedUrl]);

	return (
		<div
			style={{
				position: "fixed",
				bottom: isExpanded ? "-10px" : "-5px",
				right: `${embedOffsetRightPc}%`,
				zIndex: "1000",
			}}
		>
			<ExpandableSection
				aria-label="Chat section"
				defaultExpanded
				disableContentPaddings
				variant="container"
				headerInfo={headerInfo}
				headerText={headerText}
				onChange={handleOnChange}
			>
				{isLoadingDelay ? (
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							height: embedHeight,
						}}
					>
						<Spinner size="large" />
					</div>
				) : (
					<iframe
						src={embedUrl}
						width={embedWidth}
						height={embedHeight}
						allowFullScreen
						style={{
							border: "none",
							overflow: "hidden",
						}}
						onLoad={() => setIsLoadingDelay(false)}
					></iframe>
				)}
			</ExpandableSection>
		</div>
	);
}