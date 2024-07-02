function start()
{
    let wordArray=[
        'xôngđất',
        'giaothừa',
        'đánhđu',
        'câynêu',
        'tấtniên',
        'bánhchưng',
        'câuđối',
        'hátxoan',
        'ngãbasông'
    ]
    let goal='nguyênđán'
    let maxLeft=0
    let spine=[]
    let wrapper=document.getElementById('wrapper')
    function findIndex()
    {
        for(let i=0;i<goal.length;i++)
        {
            let word=wordArray[i]
            for(let y=0;y<word.length;y++)
            {
                
                if(word[y]===goal[i])
                {
                    spine.push(y)
                    let left=y
                    maxLeft=maxLeft>left? maxLeft:left
                   
                    break;
                }
            }
        }  
    }
    function draw()
    {
        let row;
        
        for(let i=0;i<goal.length;i++)
        {
            row=document.createElement('div')
            row.classList=`row`
            buildRowCells(i,wordArray[i],spine[i])
            wrapper.appendChild(row)
            row=null
            
        }
        function buildRowCells(rowIndex,word,letterIndex)
        {
            let emptyrow =maxLeft-letterIndex-1

            let cellIndex=document.createElement('div')
            cellIndex.classList=`divIndex`
            cellIndex.innerHTML=rowIndex
            row.appendChild(cellIndex)

            for(let i=0;i<=emptyrow;i++)
            {
                let cell=document.createElement('div')
                row.appendChild(cell)
            }
            for(let i=0;i<word.length;i++)
            {
                let cell=document.createElement('div')
                if(i===letterIndex)
                {
                    cell.classList.add('abc')
                }
                cell.classList.add('wordCell')
                cell.innerHTML=word[i]
                row.appendChild(cell)
            }
            
        }
    }
    findIndex()
    draw()
}
start()