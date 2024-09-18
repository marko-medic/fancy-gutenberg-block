import { __ } from "@wordpress/i18n";

import { useBlockProps, InspectorControls, PanelColorSettings } from "@wordpress/block-editor";

import "./editor.scss";
import {
	TextControl,
	TextareaControl,
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
					<PanelBody>
					<PanelColorSettings
						__experimentalIsRenderedInSidebar
						title="Set text colors"
						colorSettings={[
							{
								value: kickerTextColor,
								label: "Kicker color",
								onChange: handleChange('kickerTextColor'),
							},
							{
								value: kickerBgColor,
								label: "Kicker background color",
								onChange: handleChange('kickerBgColor'),
							},
							{
								value: headlineTextColor,
								label: "Headline color",
								onChange: handleChange('headlineTextColor'),
							},
							{
								value: subdeckTextColor,
								label: "Subdeck color",
								onChange: handleChange('subdeckTextColor'),
							},,
						]}
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
