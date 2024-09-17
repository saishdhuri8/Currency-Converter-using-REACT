export default function Card({countrydata,setflag,boxref,setnation,submitbutton}){

    function handleClick(e){
        boxref.current.classList.add('hidden')
        boxref.current.classList.remove('flex')
        setnation(countrydata.code3)
        submitbutton.current.value=countrydata.country;
        setflag(false)
    }

    const flaglink =`https://flagsapi.com/${countrydata.code2}/shiny/64.png`
    return(
        <>
        <div className="flex flex-row justify-between px-5 font-semibold  items-center border rounded-full" onClick={handleClick}>
            <h1 className="text-white ">{countrydata.country}</h1>
            <img src={flaglink}  alt="" />
        </div>
        </>
    )
}