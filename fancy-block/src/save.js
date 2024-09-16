import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const {
		kicker,
		headline,
		subdeck,
		kickerBgColor,
		kickerTextColor,
		headlineTextColor,
		subdeckTextColor,
	} = attributes;

	return (
		<div {...useBlockProps.save()}>
			<div className="fancy-block-content">
				<p
					className="kicker-text"
					style={{ backgroundColor: kickerBgColor, text: kickerTextColor }}
				>
					{kicker}
				</p>
				<p className="headline-text" style={{ color: headlineTextColor }}>
					{headline}
				</p>
				<p className="subdeck-text" style={{ color: subdeckTextColor }}>
					{subdeck}
				</p>
			</div>
		</div>
	);
}
