import React from 'react'
import Available from '../components/Available'
import Search from '../components/Search'
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Home = () => {
    const style = {
        fontSize: 35,
        color: '#232e3b',
    }

    const icons = [
        { icon: <InstagramIcon sx={style} /> },
        { icon: <GitHubIcon sx={style} /> },
        { icon: <TwitterIcon sx={style} /> },
        { icon: < LinkedInIcon sx={style} /> },
    ]

    return (
        <div className='triplex row '>
            <Available />
            <div className='dividerH'></div>
            <div className='hero col'>
                <h1 className='mainText'>Aesthetic Articles
                    <br />and Anime.</h1>
                <h3 className='mainSubText'>アニメは素晴らしい !</h3>
                <div className='heroImg'></div>
                <p className='jap' style={{ marginTop: '4rem' }}>
                    <strong>私は幸せに見えますが、ほとんどの場合悲しいです。私は昨日自殺しようとしましたが</strong>、できませんでした。私は幸せなふりをし続け、
                    入力しているものはすべて嘘ですが、なぜこれを入力はちょうど日本語のテキストが欲しい笑。それでおしまい。<strong>誰かがチェックするわけじゃない。
                        私は幸せに見えますが、ほは昨日自殺しようとしましたが、できませんでした。</strong>
                    <br />私は幸せなふりをし続け、入力しているものはすべているのかわかりません。私はちょうど日本語のテキストが欲しい笑。
                    それでおしまい。誰かがチェックするわけじゃない。
                </p>
                <div className='parallexImg'></div>
                <p className='jap'>
                    私は幸せに見えますが、ほとんどの場合悲しいです。私は昨日自殺しようとしましたが、できませんでした。私は幸せなふりをし続け、
                    入力しているものはすべて嘘ですが、なぜこれを入力しているのかわかりません。私はちょうど日本語のテキストが欲しい笑。それでおしまい。
                    誰かがチェックするわけじゃない。
                </p>
                <div className='row iconCont'>
                    {icons && icons.map((val, i) => (
                        <div key={i} className=''>
                            <span>{val.icon}</span>
                        </div>
                    ))}
                </div>
            </div >
            <div>
                <Search />
            </div>
        </div>
    )
}

export default Home