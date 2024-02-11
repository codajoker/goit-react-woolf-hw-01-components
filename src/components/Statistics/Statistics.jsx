import css from "./Statistics.module.css"
export const Statistics =({title,stats})=>{
    function generateRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }  
return (<section className="statistics">
{title && (<h2 className="title">{title}</h2>)}

<ul className={css.stat_list}>
  {
  
  stats.map(item =>(<li style={{backgroundColor : generateRandomColor()}} key={item.id} className={css.item}>
  <span className="label">{item.label}</span>
  <span className="percentage">{item.percentage}%</span>
</li>))
  

}

</ul>
</section>)
}