import Link from "next/link";
import Image from "next/image";

export default function Home() {
	return (
		<div className='min-h-screen bg-white'>
			{/* Navigation */}
			<nav className='fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center h-16'>
						<div className='text-xl font-bold text-gray-900'>Portfolio</div>
						<div className='hidden md:flex space-x-8'>
							<a
								href='#top'
								className='text-gray-700 hover:text-orange-500 transition-colors'
							>
								TOP
							</a>
							<a
								href='#about'
								className='text-gray-700 hover:text-orange-500 transition-colors'
							>
								ABOUT
							</a>
							<a
								href='#works'
								className='text-gray-700 hover:text-orange-500 transition-colors'
							>
								WORKS
							</a>
							<a
								href='#contact'
								className='text-gray-700 hover:text-orange-500 transition-colors'
							>
								CONTACT
							</a>
						</div>
					</div>
				</div>
			</nav>

			{/* TOP Section */}
			<section
				id='top'
				className='pt-20 pb-16 bg-gradient-to-br from-orange-50 to-white'
			>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center'>
						<h1 className='text-4xl md:text-6xl font-bold text-gray-900 mb-6'>
							My
							<span className='text-orange-500'> Portfolio</span>
						</h1>
						{/* <p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
							Creative developer passionate about building beautiful and
							functional web experiences
						</p> */}
						{/* <a
							href='#works'
							className='inline-block bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors'
						>
							View My Work
						</a> */}
					</div>
				</div>
			</section>

			{/* ABOUT Section */}
			<section id='about' className='py-16 bg-white'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
							ABOUT
						</h2>
						<div className='w-20 h-1 bg-orange-500 mx-auto'></div>
					</div>
					<div className='max-w-4xl mx-auto py-8 sm:px-2 lg:px-4'>
						<div className='text-center'>
							<div className='inline-block'>
								<Image
									src='/images/profile.jpg'
									alt='プロフィール写真'
									width={300}
									height={300}
									className='rounded-full w-64 h-64 object-cover'
								/>
							</div>
						</div>
					</div>
					<div className='max-w-xl mx-auto px-2 sm:px-2 lg:px-4 items-center'>
						<div>
							<h3 className='text-2xl font-semibold text-gray-900 mb-4'>
								Inoue Nobuhide
							</h3>
							<p className='text-gray-600 mb-6 leading-relaxed'>
								小さい頃からピアノ漬けで音楽高校・音楽大学に進学
								音楽の仕事が無くて絶望。
								教員、販売員などを経て、webデザインと出会い、忘れていたものづくりへの情熱を取り戻す。
								<br />
								コーダーを経て、現在はNext.jsやwordpressをメインにフロントエンジニアをやっています。
							</p>
							<p className='text-gray-600 leading-relaxed'>
								{/* My approach combines technical excellence with creative
								problem-solving, ensuring every project not only meets but
								exceeds expectations. */}
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* WORKS Section */}
			<section id='works' className='py-16 bg-gray-50'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
							WORKS
						</h2>
						<div className='w-20 h-1 bg-orange-500 mx-auto'></div>
					</div>

					{/* Website Category */}
					<div className='mb-16'>
						<h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
							Website
						</h3>
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{/* Website Work Item 1 */}
							<Link
								href='https://issun-app.vercel.app/top'
								target='_blank'
								rel='noopener noreferrer'
								className='block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-105 border-2 border-orange-500'
							>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<Image
										src='/images/issun_top.png'
										alt='低身長向けファッションアプリ'
										width={400}
										height={300}
										className='w-full h-full object-cover'
									/>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										低身長向けファッションアプリ
									</h3>
									<p className='text-gray-600 mb-4'>
										ZOZOTOWNやユニクロなどから、低身長でも似合う服が集まるwebサービスを作りたかった。口コミの投稿なども出来る。
										<br />
										github
									</p>
									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Next.js
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Tailwind
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											firebase
										</span>
									</div>
								</div>
							</Link>

							{/* Website Work Item 2 */}
							<Link
								href='https://salon-murex.vercel.app/'
								target='_blank'
								rel='noopener noreferrer'
								className='block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-105 border-2 border-orange-500'
							>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<Image
										src='/images/salon-site.png'
										alt='サロンサイト'
										width={400}
										height={300}
										className='w-full h-full object-cover'
									/>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										salon
									</h3>
									<p className='text-gray-600 mb-4'>
										クライアントワークで作成した美容院のサイトのモック
										<br />
									</p>
									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											HTML
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											CSS
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Javascript
										</span>
									</div>
								</div>
							</Link>

							{/* Website Work Item 3 */}
							<Link
								href='https://twitter-app-ba0d1.web.app/'
								target='_blank'
								rel='noopener noreferrer'
								className='block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-105 border-2 border-orange-500'
							>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<Image
										src='/images/X.png'
										alt='ポートフォリオサイト'
										width={400}
										height={300}
										className='w-full h-full object-cover'
									/>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										X(Twitter)クローンアプリ
									</h3>
									<p className='text-gray-600 mb-4'>
										Udemyの講座で作成したX(Twitter)クローンアプリ
										<br />
										つぶやき、画像投稿、ログイン機能、コメント機能
									</p>
									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Next.js
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											TypeScript
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											firebase
										</span>
									</div>
								</div>
							</Link>
						</div>
					</div>

					{/* Design Category */}
					<div className='mb-16'>
						<h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
							Design
						</h3>
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{/* Design Work Item 1 */}
							<Link
								href='https://www.figma.com/design/hhfRg0imlBFnSP16DglhcL/ISSUN?node-id=0-1&t=uZQyXkYKRRBNHdgW-1'
								target='_blank'
								rel='noopener noreferrer'
								className='block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-105 border-2 border-orange-500'
							>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<Image
										src='/images/ISSUN_design.png'
										alt='ISSUN_figma'
										width={400}
										height={300}
										className='w-full h-full object-cover'
									/>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										ISSUNデザインFigma
									</h3>
									<p className='text-gray-600 mb-4'>
										上記の低身長向けアプリのfigmaデザインです。
										<br />
										ZOZOTOWNなど基本のファッションアプリを踏襲しつつ、低身長でもかっこよくありたいとスタイリッシュなデザインを意識しました。
									</p>
									<br />
									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Adobe Illustrator
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Branding
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Logo Design
										</span>
									</div>
								</div>
							</Link>

							{/* Design Work Item 2 */}
							<Link
								href='https://drive.google.com/file/d/11YdUTswrC71ez5_HVwrsZyBab37ucKLd/view'
								target='_blank'
								rel='noopener noreferrer'
								className='block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-105'
							>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<Image
										src='/images/design-portfolio.png'
										alt='sungoi'
										width={400}
										height={300}
										className='w-full h-full object-cover'
									/>
								</div>

								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										訓練校でのデザインポートフォリオ
									</h3>
									<p className='text-gray-600 mb-4'>
										職業訓練校で制作したポートフォリオPDFです。
										クライアントワーク、デザイン、バナーなどを制作しました。
									</p>
									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											illustrator
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											photoshop
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											HTML/CSS/Javascript
										</span>
									</div>
								</div>
							</Link>

							{/* Design Work Item 3 */}
							<Link
								href='./images/portfolio.pdf#page=16'
								target='_blank'
								rel='noopener noreferrer'
								className='block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-105 border-2 border-orange-500'
							>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<Image
										src='/images/banner.png'
										alt='sungoi'
										width={400}
										height={300}
										className='w-full h-full object-cover'
									/>
								</div>

								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										バナー
									</h3>
									<p className='text-gray-600 mb-4'>
										上記記載のポートフォリオPDFのバナーページへのリンクです。
										<br />
										わかりにくいので分けました。
									</p>
									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											illustrator
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Photoshop
										</span>
									</div>
								</div>
							</Link>
						</div>
					</div>

					{/* Music Category */}
					<div className='mb-16'>
						<h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
							Music
						</h3>
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{/* Music Work Item 1 */}
							<Link
								href='https://youtu.be/PugY1Abrzw0?si=aOt9YA7PlNj_o9Vd'
								target='_blank'
								rel='noopener noreferrer'
								className='block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-105 border-2 border-orange-500'
							>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<Image
										src='/images/NEHAN.png'
										alt='NEHAN'
										width={400}
										height={300}
										className='w-full h-full object-cover'
									/>
								</div>

								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										オリジナルソング"NEHAN de ochashite""
									</h3>
									<p className='text-gray-600 mb-4'>作詞作曲と動画編集</p>
									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											作詞/作曲
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											DAW
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Premire
										</span>
									</div>
								</div>
							</Link>

							{/* Music Work Item 2 */}
							<Link
								href='https://youtu.be/8kaESsP3sXg?si=jAtoh8RwxPpHiMFD'
								target='_blank'
								rel='noopener noreferrer'
								className='block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-105 border-2 border-orange-500'
							>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<Image
										src='/images/sungoi.png'
										alt='sungoi'
										width={400}
										height={300}
										className='w-full h-full object-cover'
									/>
								</div>

								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										企業案件"すんごい脳みそ""
									</h3>
									<p className='text-gray-600 mb-4'>
										XのDMで東北新社様から依頼を受けて制作したものです。
										<br />
										歌詞と事業の内容をヒアリングし、作曲をしました。
										<br />
										レコーディングにも同行。
									</p>
									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											作曲
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											音声編集
										</span>
									</div>
								</div>
							</Link>

							{/* Music Work Item 3 */}
							<Link
								href='https://youtu.be/PugY1Abrzw0?si=aOt9YA7PlNj_o9Vd'
								target='_blank'
								rel='noopener noreferrer'
								className='block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-105 border-2 border-orange-500'
							>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<Image
										src='/images/curry.png'
										alt='curry'
										width={400}
										height={300}
										className='w-full h-full object-cover'
									/>
								</div>

								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										オリジナルソング"Fuck'in spicy curry rice""
									</h3>
									<p className='text-gray-600 mb-4'>作詞作曲と動画編集</p>
									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											作詞/作曲
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											DAW
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Premire
										</span>
									</div>
								</div>
							</Link>
						</div>
					</div>

					{/* 3DCG Category */}
					<div className='mb-16'>
						<h3 className='text-2xl font-bold text-gray-900 mb-8 text-center'>
							3DCG
						</h3>
						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{/* 3DCG Work Item 1 */}
							<Link
								href='https://first-threejs-roan.vercel.app/'
								target='_blank'
								rel='noopener noreferrer'
								className='block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-105 border-2 border-orange-500'
							>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<Image
										src='/images/MYROOM.png'
										alt='3DCG'
										width={400}
										height={300}
										className='w-full h-full object-cover'
									/>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										Blender/Three.js "Room"
									</h3>
									<p className='text-gray-600 mb-4'>
										Blenderで作成した3DモデルをThree.jsで表示したものです。
									</p>

									<p className='text-gray-600 mb-4'>web site</p>
									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Blender
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Three.js
										</span>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											WebGL
										</span>
									</div>
								</div>
							</Link>

							{/* 3DCG Work Item 2 */}
							<Link
								href='/images/blender.png'
								target='_blank'
								rel='noopener noreferrer'
								className='block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all hover:scale-105 border-2 border-orange-500'
							>
								<div className='h-48 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center'>
									<Image
										src='/images/blender.png'
										alt='sungoi'
										width={400}
										height={300}
										className='w-full h-full object-cover'
									/>
								</div>
								<div className='p-6'>
									<h3 className='text-xl font-semibold text-gray-900 mb-2'>
										Blenderチュートリアル作品
									</h3>
									<p className='text-gray-600 mb-4'>
										BlenderのYoutubeチュートリアルで作成したものです。
										<br />
									</p>
									<div className='flex flex-wrap gap-2'>
										<span className='px-3 py-1 bg-orange-100 text-orange-700 text-sm rounded-full'>
											Blender
										</span>
									</div>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* CONTACT Section */}
			<section id='contact' className='py-16 bg-white'>
				<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
							CONTACT
						</h2>
						<div className='w-20 h-1 bg-orange-500 mx-auto'></div>
					</div>
					<div className='flex justify-center items-center'>
						<div>
							<h3 className='text-2xl font-semibold text-gray-900 mb-6'>
								Get In Touch
							</h3>
							<div className='grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center'>
								<div className='flex items-center space-x-3'>
									<div className='w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center'>
										<span className='text-orange-600 font-semibold'>
											<Image
												src='/images/X.svg'
												alt='X'
												width={20}
												height={20}
												className='w-full h-full object-cover'
											/>
										</span>
									</div>
									<div>
										<p className='font-semibold text-gray-900'>X</p>
										<p className='text-gray-600'>いがみ</p>
									</div>
								</div>
								<div className='flex items-center space-x-3'>
									<div className='w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center'>
										<span className='text-orange-600 font-semibold'>
											<Image
												src='/images/github.svg'
												alt='X'
												width={20}
												height={20}
												className='w-full h-full object-cover'
											/>
										</span>
									</div>
									<div>
										<p className='font-semibold text-gray-900'>github</p>
									</div>
								</div>
								<div className='flex items-center space-x-3'>
									<div className='w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center'>
										<span className='text-orange-600 font-semibold'>
											<Image
												src='/images/wantedly.svg'
												alt='X'
												width={20}
												height={20}
												className='w-full h-full object-cover'
											/>
										</span>
									</div>
									<div>
										<p className='font-semibold text-gray-900'>wantedly</p>
									</div>
								</div>
							</div>
						</div>
						{/* <div className='bg-orange-50 p-8 rounded-lg'>
							<h4 className='text-xl font-semibold text-gray-900 mb-6'>
								Send a Message
							</h4>
							<form className='space-y-4'>
								<div>
									<label className='block text-sm font-medium text-gray-700 mb-2'>
										Name
									</label>
									<input
										type='text'
										className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent'
										placeholder='Your name'
									/>
								</div>
								<div>
									<label className='block text-sm font-medium text-gray-700 mb-2'>
										Email
									</label>
									<input
										type='email'
										className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent'
										placeholder='your@email.com'
									/>
								</div>
								<div>
									<label className='block text-sm font-medium text-gray-700 mb-2'>
										Message
									</label>
									<textarea
										rows={4}
										className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent'
										placeholder='Your message...'
									></textarea>
								</div>
								<button
									type='submit'
									className='w-full bg-orange-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-600 transition-colors'
								>
									Send Message
								</button>
							</form>
						</div> */}
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className='bg-gray-900 text-white py-8'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
					<p>&copy; 2025 Portfolio. All rights reserved.</p>
				</div>
			</footer>
		</div>
	);
}
