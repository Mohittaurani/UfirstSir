import React from "react";
import theme from "theme";
import { Theme, Link, Image, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"prince-of-persia2008"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Image
			width="1280px"
			height="1024px"
			position="relative"
			min-width="100%"
			overflow-x="visible"
			object-fit="fill"
			src="https://uploads.quarkly.io/607c431b7c7120001f1ee5d0/images/capsule_616x353.jpg?v=2021-04-28T10:55:43.318Z"
			loading="eager"
			object-position="100%100%"
		/>
		<Button
			position="fixed"
			left="auto"
			top="auto"
			right="128px"
			width="383.26599999999996px"
			bottom="468px"
			height="86px"
			font="normal 300 16px/1.5 --fontFamily-googleLobster"
			color="#ffffff"
			disabled={false}
			type="button"
			display="block"
		>
			Download Game
		</Button>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});