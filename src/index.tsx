import {createRoot} from 'react-dom/client'
import {Chart, registerables} from 'chart.js'
import {QueryClient, QueryClientProvider} from 'react-query'
import {ReactQueryDevtools} from 'react-query/devtools'
// Apps
import {PlaygroundI18nProvider} from './_builder/i18n/Playgroundi18n'
import './_builder/assets/sass/plugins.scss'
import './_builder/assets/sass/style.scss'
import './_builder/assets/sass/style.react.scss'

import {AppRoutes} from './app/routing/AppRoutes'
import {ThemeModeProvider} from './_builder/partials/layout/theme-mode/ThemeModeProvider'

Chart.register(...registerables)
const queryClient = new QueryClient()
const container = document.getElementById('root')
if (container) {
  createRoot(container).render(
    <QueryClientProvider client={queryClient}>
      <PlaygroundI18nProvider>
        <ThemeModeProvider>
          <AppRoutes />
        </ThemeModeProvider>
      </PlaygroundI18nProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
