import Styles from '../styles/editor.module.scss'

	
	
function Editor() {
	return (
		<div className={Styles.container}>
			<div className={Styles.editor}>
				<div className={Styles.tools}>
					<ul className={Styles.list}>
						<li className={Styles.index}>Bold</li>
						<li className={Styles.index}>Italics</li>
						<li className={Styles.index}>Underline</li>
						<li className={Styles.index}>Ordered List</li>
						<li className={Styles.index}>Unordered List</li>
						<li className={Styles.index}>Hyperlink</li>
					</ul>
					</div>
			</div>
			
			<div contentEditable="true">

			</div>
		</div>	
	)
};

export default Editor