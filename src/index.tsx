import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { Constants, React, StyleSheet } from 'enmity/metro/common';
import { getByName, getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';
import { ScrollView } from 'enmity/components';
import Header from './components/Header/Header';
import ShortError from './components/ShortError/ShortError';
import Actions from './components/Actions/Actions';

const ErrorBoundary = getByName("ErrorBoundary");
const { SafeAreaView } = getByProps("SafeAreaView");

const Patcher = create(manifest.name);

const styles = StyleSheet.createThemedStyleSheet({
   container: {
      backgroundColor: Constants.ThemeColorMap.BACKGROUND_PRIMARY,

      width: "100%",
      height: "100%",

      alignItems: "center",
      flex: 1
   }
})

const PrettyErrorBoundary: Plugin = {
   ...manifest,

   onStart() {
      Patcher.after(ErrorBoundary.prototype, "render", (self) => {
         if (!self.state.error) return;

         return <SafeAreaView style={styles.container}>
            <ScrollView>
               <Header />
               <ShortError 
                  error={self.state.error} 
                  engine={window["HermesInternal"] ? "hermes" : "jsc"} 
               />
               <Actions 
                  setNoError={() => self.setState({ info: null, error: null })} 
                  error={self.state.error} 
               />
            </ScrollView>
         </SafeAreaView>
      })
   },

   onStop() {
      Patcher.unpatchAll();
   },

   getSettingsPanel() {
      return <cute />
   }
};


registerPlugin(PrettyErrorBoundary);
