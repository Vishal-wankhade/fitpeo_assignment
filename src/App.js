import { FiDisc,FiSlack,FiBox,FiChevronRight,FiUser,FiChevronDown , FiSearch , FiDollarSign,FiMenu  } from "react-icons/fi";
import { BiWalletAlt,BiBuoy,BiHelpCircle, BiBook , BiWallet , BiShoppingBag , BiMenu} from "react-icons/bi";
import { BsFillXCircleFill } from "react-icons/bs";
import pr from './profile.png'
import './App.css';
import Data from './Data'
import BarCom from './BarCom'
import  Dchart  from './Dchart'
import loading from './loading.gif'
import { useState,useEffect } from "react";



function App() {
  const [balance, setBalance] = useState();
  const [earnings, setEarnings] = useState();
  const [orders, setOrders] = useState();
  const [sales, setSales] = useState();
  const [month, setMonth] = useState();
  const [lastMonthEarnings, setLastMonthEarnings] = useState();
  const [lastMonthOrders, setLastMonthOrders] = useState();
  const [lastMonthBalance, setLastMonthBalance] = useState();
  const [lastMonthSales, setLastMonthSales] = useState();
 const [menuClick,setMenuClick] = useState(null);


 const [isLoading, setIsLoading] = useState(true);



  useEffect(() => {
    let today = new Date();
    let m = today.toLocaleString('default', {
      month: 'long',
    });

    for (var i = 0; i < Data.length; i++) {
      if (m === Data[i].month) {
        setMonth(m);
        setBalance(Data[i].balance);
        setEarnings(Data[i].earnings);
        setSales(Data[i].totalSales);
        setOrders(Data[i].orders);
        setLastMonthEarnings(Data[i - 1]?.earnings || 0);
        setLastMonthOrders(Data[i - 1]?.orders || 0);
        setLastMonthBalance(Data[i - 1]?.balance || 0);
        setLastMonthSales(Data[i - 1]?.totalSales || 0); // Set last month's earnings or 0 if not available
      }
    }
  }, []);

  const earningChange = earnings - lastMonthEarnings;
  const earningChangePercentage = ((earningChange / lastMonthEarnings) * 100).toFixed(2);
  const earningChangeColor = earningChange > 0 ? 'green' : earningChange < 0 ? 'red' : 'black';
  const earningArrow = earningChange > 0 ? '↑' : earningChange < 0 ? '↓' : '';

  const orderChange = orders - lastMonthOrders;
  const orderChangePercentage = ((orderChange / lastMonthOrders) * 100).toFixed(2);
  const orderChangeColor = orderChange > 0 ? 'green' : orderChange < 0 ? 'red' : 'black';
  const orderArrow = orderChange > 0 ? '↑' : orderChange < 0 ? '↓' : '';

  const balanceChange = balance - lastMonthBalance;
  const balanceChangePercentage = ((balanceChange / lastMonthBalance) * 100).toFixed(2);
  const balanceChangeColor = balanceChange > 0 ? 'green' : balanceChange < 0 ? 'red' : 'black';
  const balanceArrow = balanceChange > 0 ? '↑' : balanceChange < 0 ? '↓' : '';

  const salesChange = sales - lastMonthSales;
  const salesChangePercentage = ((salesChange / lastMonthSales) * 100).toFixed(2);
  const salesChangeColor = salesChange > 0 ? 'green' : salesChange < 0 ? 'red' : 'black';
  const salesArrow = salesChange > 0 ? '↑' : salesChange < 0 ? '↓' : '';

 
  function clicked(){
    
    setMenuClick(true);
  }

  function xClicked(){
    setMenuClick(false);
  }


  useEffect(() => {
   
    setTimeout(() => {
     

      
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    
    return (
      <div className="loading">
      
         <div className="loading"><img src={loading} alt="" style={{height:'100vh', width:'100vw'}}/></div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className='wrap'>
      <div className={`sidebar ${menuClick === null ? '' : menuClick === true ? 'open' : 'close'}`}>

          <div className="title"><span><FiDisc/></span><h1>Dashboard</h1> <BsFillXCircleFill onClick={xClicked} className="close-button"/> </div>

          <div className="menu-wrap">
            <ul>
              <li className="active"><span className="ic-title"><FiSlack className="ic"/><p>Dashboard</p></span><span><FiChevronRight/></span></li>
              <li><span className="ic-title"><FiBox className="ic"/><p>Product</p></span><span><FiChevronRight/></span></li>
              <li><span className="ic-title"><FiUser className="ic"/><p>Customers</p></span><span><FiChevronRight/></span></li>
              <li><span className="ic-title"><BiWalletAlt className="ic"/><p>Income</p></span><span><FiChevronRight/></span></li>
              <li><span className="ic-title"><BiBuoy className="ic"/><p>Promote</p></span><span><FiChevronRight/></span></li>
              <li><span className="ic-title"><BiHelpCircle className="ic"/><p>Help</p></span><span><FiChevronRight/></span></li>
            </ul>
          </div>

          <div className="user-info"> 
                 <div className="profile">
                    <img src={pr} alt="" />
                    <div className="pr-name">
                        <h5>Evano</h5>
                        <p className="sub-name">Project Manager</p>
                    </div>
                 </div>
                 <span>
                    <FiChevronDown/>
                 </span>
          </div>
         </div>

         <div className={`main ${menuClick === null ? '' : menuClick === true ? 'close' : 'open'}`}>
            <div className="header">
               <FiMenu className="menu-bar" onClick={clicked}/>
               <h2>Hello , Shahruk 👋,</h2>
               <div className="search"><FiSearch className="search-ic"/><input placeholder="search" type="text" /></div>             
            </div>

            <div className="numbers">
                  <div className="section earning">
                    <div className="sec-icon">
                          <div className="img-bg">
                                <FiDollarSign className="img-ic"/>
                          </div>
                    </div>
                     <div className="info">
                        <p className="sec-title">Earning</p>
                        <h3 >
                          ${earnings}k 
                        </h3>
                        <p style={{ color: earningChangeColor , fontSize:"12px",}} className="difference">{earningArrow}
                            {earningChangePercentage}% <span style={{ color: "gray" }}>This month</span></p>
                     </div>
                    </div>


                  <div className="section orders">
                  <div className="sec-icon">
                          <div className="img-bg">
                                <BiBook className="img-ic"/>
                          </div>
                    </div>
                     <div className="info">
                        <p className="sec-title">Orders</p>
                        <h3 >
                          ${orders}k 
                        </h3>
                        <p style={{ color: orderChangeColor , fontSize:"12px",}} className="difference">{orderArrow}
                            {orderChangePercentage}% <span style={{ color: "gray" }}>This month</span></p>
                     </div>
                  </div>


                  <div className="section balance">
                  <div className="sec-icon">
                          <div className="img-bg">
                                <BiWallet className="img-ic"/>
                          </div>
                    </div>
                     <div className="info">
                        <p className="sec-title">Balance</p>
                        <h3 >
                          ${balance}k 
                        </h3>
                        <p style={{ color: balanceChangeColor , fontSize:"12px",}} className="difference">{balanceArrow}
                            {balanceChangePercentage}% <span style={{ color: "gray" }}>This month</span></p>
                     </div>

                  </div>

                  <div className="section sales">
                  <div className="sec-icon">
                          <div className="img-bg">
                                <BiShoppingBag className="img-ic"/>
                          </div>
                    </div>
                     <div className="info">
                        <p className="sec-title">Total Sales</p>
                        <h3 >
                          ${sales}k 
                        </h3>
                        <p style={{ color: salesChangeColor , fontSize:"12px",}} className="difference">{salesArrow}
                            {salesChangePercentage}% <span style={{ color: "gray" }}>This month</span></p>
                     </div>


                  </div>
               </div>
               <div className="graphs">
                  <BarCom />
                  <Dchart/>
              </div>

              <div className="pro-sells">
                    <div className="pro-head">
                      <h4>Product Sell</h4>
                      <div className="search-box">
                        <div className="search"><FiSearch className="search-ic"/><input placeholder="search" type="text" /></div>
                          <div>
                           <select id="days" name="days" class="form-control" className="dp">
                              <option value="30days">Last 30 Days</option>
                              <option value="90days">last 90 Days</option>
                             </select>
                           </div>
                      </div>

                    </div>

                    <div className="sell-names">
                        <p>Product Name</p>
                        <div className="counts">
                            <p>Stock</p>
                            <p>Price</p>
                            <p>Total Sales</p>
                        </div>
                    </div>
                    <hr></hr>

                    <div className="prod">
                     <div className="prod-row">
                      <div className="prod-items">
                        <div className="prod-img">

                        </div>
                        <div className="prod-title">
                          <h4>Abstract 3D</h4>
                          <p>lorem jnsc ccc ecece ee</p>
                          
                        </div>


                      </div>

                      <div className="prod-info">
                        <p>33 in stocks</p>
                        <p>$49.99</p>
                        <p>20</p>
                           
                      </div>

                     </div>

                     <div className="prod-row">
                      <div className="prod-items">
                        <div className="prod-img second">

                        </div>
                        <div className="prod-title">
                          <h4>Sarphens Illustation</h4>
                          <p>lorem jnsc ccc ecece ee</p>
                          
                        </div>


                      </div>

                      <div className="prod-info">
                        <p>33 in stocks</p>
                        <p>$49.99</p>
                        <p>20</p>
                           
                      </div>

                     </div>
                      
                    </div>
              </div>
         </div>

           
      </div>
      
    </div>
    
  );
}

export default App;