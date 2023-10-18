import React, { useState } from "react";
import { View, Text, Switch, TouchableOpacity, ScrollView } from "react-native";


const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [result, setResult] = useState('')
  const colors = {
    dark: '#22252D',
    dark1: '#292B36',
    dark2: '#272B33',
    light: '#FFF',
    light1: '#F1F1F1',
    light2: '#F7F7F7',

  }
  const calculate = (title) => {
    if (title == 'C') {
      setResult('')
    }
    else if (title == 'DL') {
      setResult(result.substring(0, result.length - 1))
    }
    else if (title == '=') {
      const ans = Number(eval(result).toFixed(3)).toString()
      setResult(ans);
    }
    else
      setResult(result + title);

  }
  const getColor = (light, dark) => darkTheme ? dark : light;
  const Btn = ({ title, type }) => (
    <TouchableOpacity
      onPress={() => calculate(title)}
      style={{
        padding: 10, borderRadius: 10, elevation: 1,
        backgroundColor: getColor(colors.light1, colors.dark1), height: 70, width: 70,
        margin: 16

      }}>
      <Text style={{
        fontSize: 37, flexWrap: "wrap",
        textAlign: 'center',
        textAlignVertical: "center",
        color: getBtnColor(type)
      }}>
        {title}
      </Text>
    </TouchableOpacity>
  )
  const getBtnColor = (type) => {
    if (type == 'top') {
      return '#35FBD6'
    } else if (type == 'right') {
      return '#EB6363'
    } else {
      return getColor(colors.dark, colors.light)

    }

  }
  return (
    <ScrollView>
    <View style={{
      height: '100%', width: '100%',
      // paddingVertical: 20,
      backgroundColor: getColor(colors.light, colors.dark),
      alignItems: 'center'
    }}>
      <Switch
        value={darkTheme}
        onChange={() => setDarkTheme(!darkTheme)}
        thumbColor={getColor(colors.dark, colors.light)}
        trackColor={{ true: colors.light2, false: colors.dark2 }}
      />
      <Text style={{
        fontSize: 40,
        width: '100%', textAlign: "right",
        paddingRight: 20,
        color: getColor(colors.dark, colors.light),
        marginTop: 160, 
        paddingBottom: 40
      }}>{result}  </Text>
      <View style={{backgroundColor: getColor(colors.light1, colors.dark1),
    //  justifyContent:"center",
    //   alignItems:"center",
      paddingHorizontal:20
      }}>
      <View style={{
        flexDirection:'row',
        //  justifyContent: 'center'
        // , backgroundColor: getColor(colors.light1, colors.dark1),
        //  borderTopRightRadius: 20,
        // borderTopLeftRadius: 20,
        // flexWrap:'wrap'
      }}>
        <Btn title="C" type="top" />
        <Btn title='DL' type="top" />
        <Btn title='/' type="top" />
        <Btn title='%' type="top" />
        </View>
        <View style={{
        flexDirection:'row',
         justifyContent: 'center'
        // , backgroundColor: getColor(colors.light1, colors.dark1),
        //  borderTopRightRadius: 20,
        // borderTopLeftRadius: 20,
        // flexWrap:'wrap'
      }}>
        <Btn title="7" type="number" />
        <Btn title='8' type="number" />
        <Btn title='9' type="number" />
        <Btn title='*' type="right" />
        </View>
        <View style={{
        flexDirection:'row',
         justifyContent: 'center'
        // , backgroundColor: getColor(colors.light1, colors.dark1), 
        // borderTopRightRadius: 20,
        // borderTopLeftRadius: 20,
        // flexWrap:'wrap'
      }}>
        <Btn title="4" type="number" />
        <Btn title='5' type="number" />
        <Btn title='6' type="number" />
        <Btn title='-' type="right" />
        </View>
        <View style={{
        flexDirection:'row',
         justifyContent: 'center'
        // , backgroundColor: getColor(colors.light1, colors.dark1),
        //  borderTopRightRadius: 20,
        // borderTopLeftRadius: 20,
        // flexWrap:'wrap'
      }}>
        <Btn title="1" type="number" />
        <Btn title='2' type="number" />
        <Btn title='3' type="number" />
        <Btn title='+' type="right" />
        </View>
        <View style={{
        flexDirection:'row',
         justifyContent: 'center'
        // , backgroundColor: getColor(colors.light1, colors.dark1),
        //  borderTopRightRadius: 20,
        // borderTopLeftRadius: 20,
        // flexWrap:'wrap'
      }}>
        <Btn title="00" type="number" />
        <Btn title='0' type="number" />
        <Btn title='.' type="number" />
        <Btn title='=' type="right" />
        </View>

      </View>
    </View>
    </ScrollView>
  )

}
export default App;