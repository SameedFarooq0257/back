import Head from 'next/head';
import {useState, useContext, useEffect} from 'react';
import {useRouter} from 'next/router';
import PortfolioParallex from '../../containers/dash/content/portfolio/portfolioParallex';
import {DataContext} from '../../store/GlobalState';
import { Button } from 'antd';
const DetailProduct = () => {
  const {state} = useContext(DataContext);
  const {auth} = state;
  const router = useRouter();
  const {detail} = router.query;
  console.log(detail)
  const [addCard, setAddCard] = useState(false);
  const [data, setData] = useState();
  const [cards, setCards] = useState();
  
  return (
    <div className='row detail_page page-wrapper'>
      <Head>
        <title>Detail</title>
      </Head>
      <div className='page-main-header bg-transparent position-absolute'>
<div className="container logo-wrapper py-4 bg-transparent">
                  {/* <Button onClick={() => router.push('/')}>Home</Button> */}
                  <span
                    className="pe-cursor p-0 fs-3 mr-sm-4 mr-3"
                    onClick={() => router.push('/')}
                  >
                    <i
                      className={
                        "fa fa-arrow-circle-left text-white text-icon-lg fs-4"
                      }
                      aria-hidden="true"
                    ></i>
                  </span>
                  </div>
                  </div>
      <PortfolioParallex
        isDetail={true}
        id={detail}
        user={auth.user}
        addCard={addCard}
        setAddCard={setAddCard}
        setData={setData}
        data={data}
        cards={cards}
        setCards={setCards}
      />
    </div>
  );
};

export default DetailProduct;
