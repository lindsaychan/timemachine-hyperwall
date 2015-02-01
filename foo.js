var func = function (string) {
    //don't need "presentation=" and the first location
    var str1 = string.substring(29);
    var str2=decodeURIComponent(str1)
    var strs = str2.split("_"); //"_"
    //set up arrays to hold the Title and Text in array
    var TitlesAndDescriptions = []
    for(i=0;i<strs.length;i++){
      var each = strs[i]
      var next = strs[(i+1)]
      console.log(each+" each")
      console.log(next+" next")
      if (each.search(/ /i)!=-1){

          var TitlesAndDescriptions= TitlesAndDescriptions.concat(each)


      }
    } 


    return TitlesAndDescriptions;
};
var n=func("presentation=EeDkDLE2Bn4L2IzbWelcome%20to%20Earth%20Timelapse_SF%20Bay%20Area_DkDPWPyXs9wR6gB_Rondonia_DkDT37Hawc4T8V_Tucurui%20Dam_BkDTiTRWWTmR6gB_Meander_DkDK9ySWib2R2d_Bolivia%20Avulsion_DkDU28jbt4xTkc_Mouth%20of%20Amazon_DkDcOeLoWayQ6gB_South%20Cape%20Cod_BkDPt3KmUZ3P6gB_Outer%20Banks%20NC_DkDFGq9mKcYi8V_Lake%20Urmia_DkDOcGQprwpkmR_Aral%20Sea_DkDSq1joU5sk6gB_Aral%20Expansion_BkDcM7nkdxUhgZ_Saudi%20Irrigation_CkDWmblQtbBxuX_Australia%20Bushfire_DkDWZuFgTJ1tyc_Pinatubo_DkDWIsJrwdDg5hB%20_Cherynobyl_DkDF_LTtQz7G5hB_Mendenhall%20Glacier_DkDLGbHuiHCFkc_Columbia%20Glacier_DkDGCdvtHr_Fla_Malaspina%20Glacier_DkDXxE-kaI_t0Y_Shanghai_DkDHodbiXXyspY_Pearl%20River%20Delta_DkDcKBJj6S4jgc_Dubai_DkDVPMgliPrMmZ_DFW_DkDWCYinIO9K5hB_Rifle%2C%20CO_DkDWMOMoe_8P5hB_PA%20Fracking_DkDY3fAnOd-O5hB_Mountaintop%20Removal_DkDLA_jpgg0Iof_Mt%2E%20St%2E%20Helens_DkDa3XwoK0ZL5hB_WyomingCoal_DkDWbY3sswbK5hB_Tar%20Sands%20%2F%20Alberta_DkDc2s7sgHgK5hB_Alberta%20Logging_BALnGwp7xnI1b_Washington%20Logging_LHS-Tour_B")

for (i=0;i<n.length; i++) {
  console.log(n[i])
}
