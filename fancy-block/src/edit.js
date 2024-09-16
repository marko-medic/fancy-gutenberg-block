import { __ } from "@wordpress/i18n";

import { useBlockProps, InspectorControls } from "@wordpress/block-editor";

import "./editor.scss";
import {
	TextControl,
	TextareaControl,
	ColorPicker,
	Panel,
	PanelBody,
} from "@wordpress/components";

const KICKER_MAX_LEN = 20;
const HEADLINE_MAX_LEN = 80;
const SUBDECK_MAX_LEN = 120;

export default function Edit({ attributes, setAttributes }) {
	const {
		kicker,
		headline,
		subdeck,
		kickerBgColor,
		kickerTextColor,
		headlineTextColor,
		subdeckTextColor,
	} = attributes;

	const handleChange = (key) => (value) => {
		setAttributes({ [key]: value });
	};

	return (
		<>
			<InspectorControls>
				<Panel header="Kicker color settings">
					<PanelBody title="Kicker background color">
						<ColorPicker
							color={kickerBgColor}
							onChange={handleChange("kickerBgColor")}
						/>
					</PanelBody>
					<PanelBody title="Kicker text color">
						<ColorPicker
							color={kickerTextColor}
							onChange={handleChange("kickerTextColor")}
						/>
					</PanelBody>
				</Panel>
				<Panel>
					<PanelBody title="Headline text color">
						<ColorPicker
							color={headlineTextColor}
							onChange={handleChange("headlineTextColor")}
						/>
					</PanelBody>
				</Panel>
				<Panel>
					<PanelBody title="Subdeck text color">
						<ColorPicker
							color={subdeckTextColor}
							onChange={handleChange("subdeckTextColor")}
						/>
					</PanelBody>
				</Panel>
			</InspectorControls>
			<div {...useBlockProps()}>
				<TextControl
					label="Kicker text"
					value={kicker}
					onChange={handleChange("kicker")}
					maxLength={KICKER_MAX_LEN}
					style={{
						backgroundColor: kickerBgColor,
						color: kickerTextColor,
					}}
				/>
				<TextControl
					label="Headline text"
					value={headline}
					onChange={handleChange("headline")}
					maxLength={HEADLINE_MAX_LEN}
					style={{
						color: headlineTextColor,
					}}
				/>
				<TextareaControl
					label="Subdeck text"
					value={subdeck}
					onChange={handleChange("subdeck")}
					maxLength={SUBDECK_MAX_LEN}
					style={{
						color: subdeckTextColor,
					}}
				/>
			</div>
		</>
	);
}
