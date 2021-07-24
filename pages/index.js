import Layout from "../components/layout/layout.js"
import { externalContainer, container, header, header3, description, list, listIndices, button} from '../styles/home.module.scss'
import Link from 'next/link'

export default function Home() {
	return (
		<Layout>
		<div className={externalContainer}>
				<div className={container}>		
				<h1 className={header}>Welcome to <span className="highlight">Writer Ultra</span></h1>
				<p className={description}> An open source hackable text-editor</p>
				
				<h3 className={header3}>Features</h3>
				<ul className={list}>
					<li className={listIndices}>Open Source
					</li>
					<li className={listIndices}>Cross platform
					</li>
					<li className={listIndices}>Cloud backup
					</li>
				</ul>
		<div className="center">
				<Link href="/editor"><a className={button}>Go Write</a></Link>
				</div>
					</div>
				</div>
		</Layout>
	)
}