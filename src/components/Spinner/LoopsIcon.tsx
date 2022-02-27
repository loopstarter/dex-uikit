import React from "react";
import Svg from "../Svg/Svg";
import { SvgProps } from "../Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
      <svg style={{ marginRight: 8 }} {...props} width='56' height='56' viewBox='0 0 400 400' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <g fillRule='evenodd'>
              <path
                  d='M189.262 14.888c.345.066.843.063 1.109-.006.265-.069-.018-.124-.627-.12-.61.003-.827.059-.482.126m4.57-.005c.267.069.704.069.97 0 .267-.07.049-.127-.485-.127-.533 0-.752.057-.485.127m-6.999 6.081C80.297 24.407.933 119.709 17.078 224.809c15.274 99.436 110.65 166.222 209.415 146.639 92.242-18.289 154.191-105.963 140.63-199.029-12.941-88.81-90.95-154.342-180.29-151.455M90.82 131.37c1.724 1.146 1.612-.846 1.765 31.485l.138 29.383.849 2.369c2.792 7.797 6.902 10.244 17.207 10.244 6.981 0 6.752-.076 8.603 2.86 2.887 4.579 7.841 9.464 12.773 12.594 1.106.701 2.01 1.383 2.01 1.516 0 .633-37.722.093-39.898-.571-9.394-2.865-16.159-9.828-18.64-19.183l-.621-2.344-.095-32.433c-.111-37.562-.267-35.319 2.52-36.157 1.444-.434 12.679-.235 13.389.237m75.084 10.711c8.054 1.395 15.636 5.371 21.701 11.381l3.129 3.099 2.973-2.951c16.608-16.487 43.429-16.087 58.98.879l1.834 2.002 2.539-2.596c18.394-18.815 49.053-15.871 63.57 6.104 12.964 19.624 6.501 46.49-13.978 58.106-16.532 9.377-38.305 5.941-50.558-7.98l-1.456-1.655-3.203 3.126c-17.07 16.661-44.121 15.647-59.692-2.238l-1.023-1.175-1.179 1.314c-25.383 28.277-71.611 10.777-71.589-27.099.015-25.74 22.58-44.713 47.952-40.317m-9.563 17.48c-19.075 2.296-27.425 25.327-14.096 38.882 14.601 14.85 39.477 4.535 39.365-16.322-.071-13.274-12.231-24.129-25.269-22.56m63.154.121c-18.782 2.589-26.34 26.045-12.679 39.348 12.53 12.201 34.164 5.925 38.218-11.088 3.756-15.759-9.535-30.465-25.539-28.26m64.635-.13c-3.363.592-4.288.824-6.156 1.543-16.374 6.297-19.668 28.76-5.784 39.443 18.54 14.267 44.152-4.976 35.49-26.665-3.657-9.156-14.711-15.879-23.55-14.321m-85.265 45.507c.519.613.519.634 0 1.247l-.528.624.623-.528c.614-.519.635-.519 1.248 0l.624.528-.528-.624c-.52-.613-.52-.634 0-1.247l.528-.624-.624.528c-.613.52-.634.52-1.248 0l-.623-.528.528.624m58.277 12.986c4.082 3.5 8.734 6.396 12.435 7.741 2.609.948 2.356-1.598 2.356 23.737v22.41H254.47v-27.997c0-15.398.048-27.997.108-27.997.059 0 1.213.948 2.564 2.106M89.248 244.514c1.711.599 4.446 2.316 4.446 2.791 0 .468-2.005 3.007-2.375 3.007-.175 0-1.105-.406-2.066-.901-4.487-2.314-9.702-.673-8.588 2.701.39 1.182 1.001 1.553 6.19 3.764 5.713 2.434 7.376 4.003 7.825 7.386.982 7.404-8.772 11.748-17.025 7.582-3.63-1.832-3.864-2.348-2.009-4.438l1.338-1.508 1.494.982c5.343 3.51 12.084 2.255 10.805-2.011-.394-1.318-1.06-1.786-4.876-3.43-7.504-3.234-8.989-4.678-9.002-8.756-.02-5.968 6.959-9.583 13.843-7.169m30.364 1.917v2.079l-4.224.077-4.225.076-.072 11.566-.072 11.566h-4.99l-.072-11.566-.073-11.566-4.224-.076-4.224-.077-.084-1.773c-.046-.974-.018-1.943.062-2.151.12-.313 2.054-.366 11.172-.306l11.026.072v2.079m15.915-1.831c.451.544 8.617 25.803 8.617 26.655v.699l-2.561-.079-2.561-.08-1.008-3.604-1.008-3.603-4.419-.076-4.418-.076-1.096 3.679-1.095 3.68-2.399.08c-2.119.07-2.409.022-2.495-.416-.123-.629 8.338-26.759 8.753-27.033.59-.39 5.343-.244 5.69.174m25.807.127c6.771 2.138 7.998 11.6 1.938 14.942-1.712.944-1.886.236 1.523 6.202 3.65 6.389 3.638 6.104.253 6.003l-2.658-.079-2.839-5.128-2.839-5.129-1.981-.081-1.981-.081-.076 5.209-.075 5.21h-4.99l-.072-13.444c-.04-7.395-.007-13.614.072-13.821.179-.467 12.164-.295 13.725.197m30.627 1.704v2.079l-4.224.077-4.224.076-.073 11.566-.072 11.566h-4.99l-.072-11.566-.072-11.566-4.225-.076-4.224-.077-.083-1.773c-.046-.974-.018-1.945.063-2.156.123-.321 1.98-.372 11.172-.307l11.024.078v2.079m22.453 0v2.079l-6.306.075-6.306.074v6.632l6.168.074 6.167.075v4.158l-6.167.075-6.168.074V267.498h6.076c7.466 0 6.952-.176 6.952 2.39v2.053l-9.078-.073-9.078-.073-.077-13.167c-.043-7.242-.009-13.45.075-13.795l.153-.627 8.795.073 8.794.073v2.079m19.739-1.556c4.276 1.367 6.339 5.768 4.947 10.554-.522 1.797-2.8 4.404-4.142 4.74-.965.243-1.116-.139 2.299 5.784 3.56 6.173 3.554 5.98.161 5.98h-2.577l-2.868-5.261-2.867-5.262-2.004-.005-2.003-.005-.076 5.197-.075 5.198-2.425.08-2.426.08v-13.709c0-10.7.076-13.743.347-13.864.845-.379 12.266.032 13.709.493m-81.416 7.754v4.336l2.703-.002c4.325-.002 5.844-.775 6.4-3.256.787-3.516-.955-5.053-5.977-5.275l-3.126-.138v4.335m72.35.024v4.358l3.307-.092c4.514-.127 5.975-1.188 5.964-4.334-.01-3.05-1.326-3.94-6.138-4.153l-3.133-.138v4.359m-92.679-3.45c-.084.229-.825 2.879-1.647 5.891l-1.495 5.474h3.3c3.014 0 3.287-.042 3.152-.485-.081-.267-.663-2.356-1.294-4.643-1.804-6.539-1.852-6.685-2.016-6.237'
                  fill='#652ad2'
              />
              <path
                  d='M183.229 15.16C94 19.333 20.189 88.4 10.281 176.992c-13.4 119.812 89.635 219.353 208.846 201.767 101.363-14.954 170.741-111.405 153.008-212.716C356.316 75.67 275.174 10.86 183.229 15.16m19.127 5.912c102.643 6.274 178.077 97.211 165.325 199.302-8.564 68.564-57.665 126.792-123.883 146.912-113.905 34.61-228.55-50.161-228.678-169.088-.11-102.342 85.515-183.343 187.236-177.126M76.749 131.582c-1.737 1.078-1.628-1.234-1.628 34.522 0 21.522.099 33.104.292 34.192 1.82 10.278 9.435 18.33 19.944 21.09 1.726.453 28.367.887 36.59.596l2.357-.083-2.357-1.543c-5.203-3.408-9.57-7.725-12.735-12.59-1.847-2.839-1.236-2.628-7.639-2.638-9.25-.015-12.665-1.353-16.029-6.276-3.228-4.725-3.236-4.816-3.236-37.731 0-29.34.038-28.533-1.419-29.553-.961-.674-13.051-.661-14.14.014m74.88 10.61c-31.457 5.758-44.557 43.339-23.489 67.385 15.844 18.084 44.896 18.257 60.825.362l1.652-1.855 3.029 3.026c16.768 16.755 44.97 16.065 59.641-1.458l1.164-1.39 3.128 3.082c30.543 30.099 80.683-.877 67.588-41.756-9.193-28.699-46.285-37.365-67.803-15.841l-2.81 2.811-3.161-3.101c-16.21-15.9-41.287-15.844-57.439.13l-3.275 3.238-2.753-2.83c-9.408-9.67-23.291-14.184-36.297-11.803m11.41 17.589c18.189 3.492 25.039 25.647 12.013 38.854-14.573 14.776-39.412 4.525-39.345-16.237.048-14.621 13.029-25.364 27.332-22.617m64.033 0c17.93 3.443 24.951 25.335 12.372 38.578-13.999 14.737-38.459 5.685-39.758-14.714-.942-14.793 12.704-26.683 27.386-23.864m65.651.433c17.876 5.16 22.625 28.703 8.117 40.233-15.676 12.457-38.29.88-37.421-19.158.641-14.791 15.087-25.18 29.304-21.075m-92.722 44.636c.553-.459.878-.141.42.41-.282.341-.282.504 0 .845.458.552.133.869-.42.41-.351-.292-.516-.274-.93.1-.657.595-1.01.233-.415-.425.428-.472.428-.542 0-1.015-.595-.658-.242-1.02.415-.425.414.374.579.392.93.1m54.488 39.017-.019 28.066h17.186l.037-1.178c.02-.648.007-10.72-.028-22.384-.068-22.517-.048-22.176-1.307-22.176-1.23 0-7.177-3.181-9.982-5.339-1.753-1.35-4.243-2.837-4.243-2.536 0 .1-.167.043-.372-.127-.205-.17-.454-.227-.554-.126-.101.1-.192-.119-.202-.488a4.022 4.022 0 0 0-.258-1.224c-.135-.315-.247 11.596-.258 27.512'
                  fill='#efeff2'
              />
              <path
                  d='M81.978 244.22c-7.518 1.897-8.902 10.581-2.223 13.949.729.368 2.698 1.258 4.375 1.979 4.682 2.012 5.406 2.642 5.406 4.709 0 3.566-6.441 4.327-10.938 1.292-1.632-1.101-1.561-1.112-2.899.448-1.438 1.679-1.419 1.952.214 3.066 7.703 5.249 18.072 2.4 18.553-5.098.272-4.237-1.258-5.865-8.325-8.86-4.835-2.048-5.753-2.762-5.753-4.472 0-3.113 4.8-4.095 9.088-1.86l1.833.955 1.042-1.186c1.346-1.532 1.324-1.952-.15-2.966-2.696-1.855-7.204-2.717-10.223-1.956m15.433.65c-.08.209-.107 1.051-.06 1.871l.085 1.492 4.297.138 4.296.139.139 11.642.138 11.643h4.436l.138-11.643.139-11.642 4.227-.076 4.227-.077v-3.866h-10.958c-9.019 0-10.984.067-11.104.379m32.185-.033c-2.843 8.438-8.464 26.407-8.353 26.697.199.52 4.18.574 4.52.062.124-.186.666-1.838 1.205-3.673l.98-3.335 4.583-.076 4.583-.076.912 3.264c1.261 4.517 1.017 4.233 3.642 4.233 1.659 0 2.254-.098 2.367-.393.13-.339-2.389-8.383-7.276-23.238l-1.254-3.811h-2.896c-2.07 0-2.93.099-3.013.346m18.218 13.306.072 13.652 2.194.082c2.786.104 2.648.401 2.653-5.708l.004-5.071 2.006.082 2.006.081 2.36 4.305c1.298 2.368 2.637 4.769 2.975 5.336l.614 1.031h2.349c3.144 0 3.155.172-.386-6.001-1.706-2.974-3.06-5.445-3.008-5.49.051-.046.592-.337 1.202-.647 5.097-2.593 5.534-10.948.723-13.832-2.114-1.268-3.504-1.472-10.025-1.472h-5.81l.071 13.652m22.11-11.722v1.936l4.227.077 4.227.076.139 11.642.139 11.643H183.091l.138-11.643.139-11.642 4.297-.139 4.296-.138v-3.604l-11.019-.072-11.018-.073v1.937m26.955 11.722.072 13.652h17.741V267.914l-6.515-.139-6.514-.138-.077-3.945-.077-3.945 6.314-.074 6.314-.075V255.717l-6.237-.138-6.237-.139v-6.93l6.307-.074 6.306-.075v-3.87h-17.469l.072 13.652m23.285-.022.072 13.674h4.712l.075-5.336.076-5.336 2.003.006 2.004.007 2.92 5.329 2.919 5.33 2.421.08c3.232.107 3.24.247-.355-6.031-1.686-2.946-3.032-5.385-2.991-5.42.042-.036.575-.319 1.184-.629 4.431-2.254 5.617-9.26 2.176-12.853-1.864-1.946-3.455-2.304-10.702-2.404l-6.586-.091.072 13.674m-85.444-2.196 1.304 4.643h-3.457c-3.159 0-3.445-.041-3.32-.485.076-.267.783-2.855 1.572-5.752.79-2.896 1.506-5.454 1.592-5.682.09-.242.334.223.581 1.108.234.839 1.011 3.614 1.728 6.168m25.353-6.999c1.449.734 2.155 2.112 2.026 3.954-.216 3.097-1.774 4.151-6.382 4.316l-2.98.107v-8.978l3.257.093c2.184.062 3.528.229 4.079.508m72.668.11c2.633 1.584 2.378 5.84-.448 7.497-.784.459-1.567.587-4.088.668l-3.118.101v-8.988l3.395.101c2.703.08 3.572.207 4.259.621'
                  fill='#fba306'
              />
              <path
                  d='M191.337 14.89a6.08 6.08 0 0 0 1.525 0c.419-.063.076-.115-.762-.115-.839 0-1.182.052-.763.115m-8.726.28c.498.061 1.246.06 1.663-.003.416-.063.009-.114-.906-.112-.915.001-1.256.053-.757.115m17.181-.001a8.752 8.752 0 0 0 1.802 0c.495-.061.09-.111-.901-.111s-1.396.05-.901.111m-21.618.273c.345.066.843.064 1.109-.006.265-.069-.018-.123-.627-.12-.61.003-.827.06-.482.126m26.608 0c.343.066.904.066 1.247 0 .343-.066.062-.12-.624-.12-.686 0-.966.054-.623.12m-30.077.272c.267.07.704.07.971 0 .266-.069.048-.126-.485-.126-.534 0-.752.057-.486.126m33.542 0c.267.07.703.07.97 0 .267-.069.048-.126-.485-.126-.534 0-.752.057-.485.126m-22.731 5.28c.724.057 1.91.057 2.634 0s.131-.104-1.317-.104-2.041.047-1.317.104m10.257 0c.724.057 1.909.057 2.633 0s.132-.104-1.317-.104c-1.448 0-2.04.047-1.316.104m-15.939.269c.343.066.904.066 1.247 0 .343-.066.062-.12-.624-.12-.686 0-.966.054-.623.12m23.007 0c.343.066.905.066 1.248 0 .343-.066.062-.12-.624-.12-.686 0-.967.054-.624.12m-26.472.273c.266.069.703.069.97 0 .267-.07.048-.127-.485-.127-.534 0-.752.057-.485.127m30.356.004c.345.067.844.064 1.109-.005.265-.07-.017-.124-.627-.121-.61.003-.826.06-.482.126m-96.746 12.573c-1.181.604-2.148 1.16-2.148 1.236 0 .124 4.407-1.996 4.689-2.256.393-.362-.685.071-2.541 1.02M71.362 60.222l-.815.901.901-.815c.84-.758 1.029-.987.815-.987-.048 0-.454.405-.901.901m242.983 1.732c.517.534 1.003.97 1.079.97.076 0-.284-.436-.802-.97-.517-.533-1.002-.97-1.079-.97-.076 0 .285.437.802.97m-245.614.624-.956 1.039 1.04-.955c.968-.889 1.167-1.124.955-1.124-.046 0-.514.468-1.039 1.04m252.406 5.89c2.741 2.745 5.046 4.99 5.122 4.99.076 0-2.104-2.245-4.845-4.99-2.741-2.744-5.046-4.989-5.123-4.989-.076 0 2.104 2.245 4.846 4.989m-13.445-4.625c0 .048.406.453.901.901l.901.814-.814-.901c-.759-.84-.988-1.028-.988-.814M74.688 65.211l-.814.901.901-.814c.84-.759 1.028-.988.814-.988-.048 0-.453.406-.901.901m-12.183 3.327-3.877 3.95 3.95-3.877c2.173-2.133 3.95-3.91 3.95-3.95 0-.199-.421.207-4.023 3.877m248.652-1.456c.596.61 1.145 1.109 1.222 1.109.076 0-.349-.499-.944-1.109-.596-.609-1.146-1.108-1.222-1.108-.076 0 .349.499.944 1.108m-239.362.693c-.673.687-1.162 1.248-1.086 1.248.076 0 .69-.561 1.363-1.248.673-.686 1.162-1.247 1.086-1.247-.077 0-.69.561-1.363 1.247m245.184 4.851c1.977 1.982 3.657 3.604 3.734 3.604.076 0-1.48-1.622-3.457-3.604-1.978-1.982-3.658-3.603-3.734-3.603-.077 0 1.479 1.621 3.457 3.603m-250.319.07-2.211 2.287 2.287-2.211c2.124-2.054 2.413-2.363 2.211-2.363-.042 0-1.071 1.029-2.287 2.287m-10.263 2.217-1.096 1.178 1.179-1.095c1.095-1.019 1.305-1.261 1.095-1.261-.045 0-.575.53-1.178 1.178m271.531.624c.517.534 1.003.97 1.079.97.076 0-.285-.436-.802-.97-.517-.534-1.003-.97-1.079-.97-.076 0 .285.436.802.97M54.175 77.408l-.814.901.901-.814c.495-.448.901-.853.901-.901 0-.214-.229-.026-.988.814m7.641.347c-.674.686-1.162 1.247-1.086 1.247.076 0 .69-.561 1.363-1.247s1.162-1.248 1.085-1.248c-.076 0-.689.562-1.362 1.248m267.498-.607c0 .048.405.454.901.901l.901.814-.814-.9c-.759-.84-.988-1.029-.988-.815m-6.664 1.369c1.148 1.224 1.397 1.444 1.397 1.236 0-.045-.592-.637-1.317-1.317l-1.316-1.236 1.236 1.317M59.165 80.735l-.814.9.901-.814c.495-.447.9-.853.9-.901 0-.214-.228-.025-.987.815m265.159-.26c0 .048.406.453.901.901l.901.814-.814-.901c-.759-.84-.988-1.028-.988-.814M81.027 131.046c1.647.049 4.267.048 5.821-.001 1.554-.049.207-.089-2.995-.089s-4.473.04-2.826.09m-6.049 34.581c0 17.533.033 24.665.074 15.849.041-8.817.041-23.162 0-31.879-.041-8.716-.074-1.503-.074 16.03m17.463-3.465c0 15.017.034 21.161.075 13.652.041-7.508.041-19.795 0-27.304-.041-7.509-.075-1.365-.075 13.652m65.086-20.586c.729.058 1.852.057 2.495-.001.644-.058.047-.105-1.325-.104-1.372 0-1.898.048-1.17.105m64.171-.001c.652.059 1.65.058 2.218-.001.568-.06.034-.108-1.186-.107-1.219.001-1.684.05-1.032.108m63.472 0c.648.058 1.708.058 2.356 0 .648-.058.118-.106-1.178-.106-1.296 0-1.826.048-1.178.106m-97.644 11.994c1.213 1.22 2.267 2.218 2.343 2.218.076 0-.853-.998-2.066-2.218-1.212-1.22-2.267-2.218-2.343-2.218-.076 0 .853.998 2.066 2.218m-57.942.069-1.933 2.01 2.009-1.933c1.867-1.795 2.137-2.086 1.933-2.086-.042 0-.946.904-2.009 2.009m64.033 0-1.933 2.01 2.01-1.933c1.866-1.795 2.136-2.086 1.933-2.086-.043 0-.947.904-2.01 2.009m57.942-.069c1.059 1.067 1.988 1.94 2.064 1.94.077 0-.728-.873-1.787-1.94s-1.987-1.94-2.064-1.94c-.076 0 .728.873 1.787 1.94m63.618-.139c.517.534 1.002.971 1.079.971.076 0-.285-.437-.802-.971-.517-.533-1.003-.97-1.079-.97-.076 0 .285.437.802.97m-45.192 12.821-1.794 1.871 1.871-1.794c1.029-.986 1.871-1.828 1.871-1.871 0-.204-.282.056-1.948 1.794m-127.781-.069c-.674.686-1.162 1.247-1.086 1.247.076 0 .69-.561 1.363-1.247.673-.687 1.162-1.248 1.086-1.248-.077 0-.69.561-1.363 1.248m32.571-.139c.595.61 1.145 1.109 1.221 1.109.076 0-.349-.499-.944-1.109-.596-.61-1.145-1.109-1.221-1.109-.077 0 .348.499.944 1.109m31.462.139c-.673.686-1.162 1.247-1.086 1.247.077 0 .69-.561 1.363-1.247.674-.687 1.162-1.248 1.086-1.248-.076 0-.69.561-1.363 1.248m32.698-.07c.68.724 1.272 1.317 1.317 1.317.208 0-.012-.249-1.236-1.398l-1.317-1.235 1.236 1.316m-37.008 6.055c-.244.472-.394.907-.334.967.06.06.317-.326.57-.858.571-1.195.373-1.286-.236-.109m41.37.109c.254.532.511.918.571.858.127-.127-.715-1.824-.905-1.824-.069 0 .081.435.334.966m83.875 7.627c0 .686.054.967.12.624a3.958 3.958 0 0 0 0-1.248c-.066-.343-.12-.062-.12.624M199.67 181.15c.002.915.053 1.256.115.758.062-.499.061-1.247-.003-1.663-.063-.417-.113-.009-.112.905m-64.018 1.386c.001 1.525.047 2.113.104 1.308.056-.806.055-2.053-.002-2.772-.057-.719-.103-.06-.102 1.464m45.984-1.663c.003.61.06.827.126.482.067-.345.064-.844-.005-1.109-.07-.265-.124.017-.121.627m64.062 1.663c-.001 1.373.046 1.969.104 1.325.058-.643.059-1.766.002-2.494-.058-.729-.105-.203-.106 1.169m122.488-1.247c0 .534.057.752.127.485s.07-.703 0-.97-.127-.049-.127.485m-352.598.554c0 .534.057.752.126.485.07-.266.07-.703 0-.97-.069-.267-.126-.048-.126.485m358.702.971c.003.609.06.826.126.481.067-.344.064-.843-.005-1.108-.07-.265-.124.017-.121.627m-364.795.831c.003.61.06.827.126.482s.064-.844-.006-1.109c-.069-.265-.123.017-.12.627m172.147.416c0 .686.054.967.12.624a3.958 3.958 0 0 0 0-1.248c-.066-.343-.12-.062-.12.624m18.007-.277c0 .533.057.752.126.485.07-.267.07-.704 0-.97-.069-.267-.126-.049-.126.485m168.826.831c0 .686.054.967.12.624a3.952 3.952 0 0 0 0-1.247c-.066-.343-.12-.063-.12.623m-41.309.416c.003.61.06.827.126.482.067-.345.064-.844-.005-1.109-.07-.265-.124.017-.121.627m-311.844.416c0 .686.054.967.12.624a3.958 3.958 0 0 0 0-1.248c-.066-.343-.12-.062-.12.624m359.255 1.247c.002.763.056 1.042.119.62.064-.421.063-1.045-.003-1.386-.066-.341-.118.004-.116.766M9.231 187.942c0 .838.052 1.181.115.762a6.08 6.08 0 0 0 0-1.525c-.063-.419-.115-.076-.115.763m359.531 1.247c.002.915.054 1.256.115.758.062-.499.061-1.247-.003-1.664-.063-.416-.113-.009-.112.906M15.06 190.575c.001 1.067.051 1.47.111.895.06-.575.059-1.448-.002-1.94-.061-.493-.11-.022-.109 1.045m359.835 7.346c0 3.888.039 5.478.087 3.534.048-1.944.048-5.124 0-7.068s-.087-.354-.087 3.534m-365.91-.139c0 2.745.042 3.83.092 2.412.051-1.418.05-3.663 0-4.99-.051-1.326-.092-.166-.092 2.578m360.065.139c0 1.296.048 1.826.107 1.178.058-.648.058-1.708 0-2.356-.059-.648-.107-.118-.107 1.178m-228.509-1.022c0 .048.405.453.9.901l.901.814-.814-.901c-.759-.84-.987-1.028-.987-.814m162.01 1.923L301.455 200l1.178-1.096c1.096-1.019 1.306-1.26 1.096-1.26-.045 0-.575.53-1.178 1.178m-159.793.295c0 .047.406.453.901.9l.901.815-.814-.901c-.759-.84-.988-1.029-.988-.814m-46.292 1.108c0 .048.405.453.901.901l.9.814-.814-.9c-.759-.84-.987-1.029-.987-.815m50.727 2.268c0 .188 2.252 1.308 2.377 1.182.058-.058-.453-.377-1.135-.709-.683-.331-1.242-.544-1.242-.473m-132.135 2.635c0 .991.05 1.397.111.901a8.752 8.752 0 0 0 0-1.802c-.061-.495-.111-.09-.111.901m183.325-.647c-.102.103.021.415.273.694.428.473.428.543 0 1.015-.595.658-.242 1.02.415.425.382-.345.594-.379.88-.141.487.404.832.067.428-.419-.226-.274-.226-.471 0-.744.404-.487.059-.824-.428-.419-.286.237-.498.203-.88-.142-.276-.25-.586-.371-.688-.269m1.681.616c.446-.349.456-.34.11.101-.322.411-.322.559 0 .97.346.44.336.45-.11.1-.425-.334-.572-.315-1.109.139l-.618.523.528-.624c.519-.613.519-.634 0-1.247l-.528-.624.618.524c.537.453.684.472 1.109.138m-91.594-.039c1.647.049 4.266.049 5.821 0 1.554-.05.207-.09-2.995-.09-3.202.001-4.474.041-2.826.09m260.295 1.456c0 .991.05 1.397.112.901a8.895 8.895 0 0 0 0-1.802c-.062-.495-.112-.09-.112.901m-211.114-.909c.493.062 1.366.063 1.941.003s.172-.11-.895-.112c-1.067-.001-1.538.048-1.046.109m63.901.002c.572.06 1.508.06 2.079 0 .572-.059.104-.108-1.039-.108-1.144 0-1.611.049-1.04.108m64.034-.003a6.168 6.168 0 0 0 1.524 0c.419-.064.076-.116-.762-.116-.839 0-1.182.052-.762.116M9.227 207.762c.002.762.056 1.041.12.619.063-.421.062-1.045-.004-1.386-.066-.34-.118.004-.116.767m365.346 1.247c0 .686.054.967.12.624a3.958 3.958 0 0 0 0-1.248c-.066-.343-.12-.062-.12.624m-120.679-.069-.672.762.714-.626c.392-.345.818-.532.945-.416.128.116.142.054.033-.136-.263-.456-.244-.464-1.02.416m-238.572 1.455c0 .686.054.967.12.624a3.958 3.958 0 0 0 0-1.248c-.066-.343-.12-.062-.12.624m299.71 1.178-2.211 2.287 2.286-2.211c2.124-2.054 2.414-2.363 2.212-2.363-.042 0-1.071 1.029-2.287 2.287m-57.79-.208c.982.991 1.848 1.802 1.924 1.802.076 0-.665-.811-1.647-1.802s-1.848-1.802-1.924-1.802c-.077 0 .665.811 1.647 1.802m111.227-.277c.003.61.06.827.126.482.067-.345.064-.844-.005-1.109-.07-.265-.124.017-.121.627m-175.538-.329c0 .048.406.453.901.901l.901.814-.814-.901c-.759-.84-.988-1.028-.988-.814M9.495 212.197c.003.61.06.826.126.482.066-.345.064-.844-.006-1.109-.069-.265-.123.017-.12.627m364.795.831c.003.61.06.827.126.482.067-.345.064-.843-.005-1.109-.07-.265-.124.018-.121.627m-291.823 1.248c.905.915 1.708 1.663 1.785 1.663.076 0-.603-.748-1.508-1.663s-1.708-1.663-1.784-1.663c-.076 0 .602.748 1.507 1.663m41.984.069c1.149 1.224 1.398 1.444 1.398 1.236 0-.045-.593-.637-1.317-1.317l-1.316-1.236 1.235 1.317m243.735.208c0 .534.057.752.127.485s.07-.703 0-.97-.127-.049-.127.485m-358.42.832c0 .533.057.752.127.485s.07-.704 0-.97c-.07-.267-.127-.049-.127.485m245.09 1.27c.093.241.168.698.168 1.016 0 .318.082.496.183.396.1-.101.349-.044.554.126.205.17.372.227.372.127s.593.141 1.317.535l1.316.715-1.801-1.665c-1.834-1.694-2.411-2.036-2.109-1.25m6.453 4.85c.344.416 2.031 1.478 2.031 1.278 0-.065-.53-.467-1.178-.894-.648-.428-1.032-.6-.853-.384m-100.045 1.837c.345.067.844.064 1.109-.005.265-.07-.017-.124-.627-.121-.609.003-.826.06-.482.126m64.169-.005c.267.07.704.07.97 0 .267-.069.049-.126-.485-.126-.533 0-.752.057-.485.126m63.756 0c.267.07.704.07.97 0 .267-.069.049-.126-.485-.126-.533 0-.752.057-.485.126m-18.02 3.294c.447.531.489 1.934.557 18.711l.073 18.137.067-18.183.067-18.183-.623-.528c-.623-.527-.623-.527-.141.046m.563 44.194c0 .686.054.966.12.623a3.952 3.952 0 0 0 0-1.247c-.066-.343-.12-.062-.12.624M32.178 274.29c0 .152.239.713.532 1.247.292.534.531.846.531.693 0-.152-.239-.714-.531-1.247-.293-.534-.532-.846-.532-.693m1.918 4.019c.311.61.628 1.109.704 1.109.076 0-.116-.499-.427-1.109s-.628-1.109-.704-1.109c-.077 0 .116.499.427 1.109m-6.653-.176c0 .301 1.377 2.948 1.534 2.948.076 0-.191-.655-.593-1.455-.773-1.54-.941-1.806-.941-1.493m297.002 37.113-.814.901.901-.814c.84-.759 1.029-.988.814-.988-.047 0-.453.406-.901.901m-265.401-.26c0 .048.405.453.901.901l.9.814-.814-.901c-.759-.839-.987-1.028-.987-.814m262.637 3.309-1.376 1.456 1.455-1.376c1.353-1.278 1.583-1.535 1.376-1.535-.044 0-.699.655-1.455 1.455m-258.618 1.04c.905.914 1.708 1.663 1.785 1.663.076 0-.603-.749-1.508-1.663-.905-.915-1.708-1.663-1.784-1.663-.076 0 .602.748 1.507 1.663m266.372-.763-.814.901.901-.814c.84-.759 1.028-.987.814-.987-.048 0-.453.405-.901.9m-275.381-.259c0 .047.405.453.901.901l.901.814-.814-.901c-.759-.84-.988-1.028-.988-.814m272.891 3.031-1.096 1.179 1.178-1.096c1.096-1.019 1.306-1.261 1.096-1.261-.046 0-.576.53-1.178 1.178m-269.426.763c.751.762 1.428 1.386 1.504 1.386.076 0-.476-.624-1.227-1.386-.751-.763-1.427-1.386-1.504-1.386-.076 0 .476.623 1.227 1.386m259.449 1.178-1.375 1.455 1.455-1.375c.8-.757 1.455-1.412 1.455-1.456 0-.207-.257.024-1.535 1.376m4.303 4.019-3.461 3.535 3.534-3.461c3.283-3.215 3.66-3.608 3.461-3.608-.04 0-1.631 1.59-3.534 3.534m-250.862-.623c.982.991 1.848 1.801 1.924 1.801.076 0-.665-.81-1.647-1.801-.982-.991-1.848-1.802-1.924-1.802-.077 0 .665.811 1.647 1.802m-9.979-1.449c0 .042.966 1.009 2.148 2.148l2.148 2.073-2.072-2.149c-1.924-1.995-2.224-2.275-2.224-2.072m251.826 2.488-1.376 1.455 1.455-1.375c1.353-1.278 1.583-1.535 1.376-1.535-.044 0-.699.655-1.455 1.455m-238.244 2.287c.518.534 1.003.97 1.079.97.077 0-.284-.436-.801-.97-.518-.534-1.003-.97-1.079-.97-.077 0 .284.436.801.97m235.187.485-.814.901.901-.814c.84-.759 1.029-.988.814-.988-.047 0-.453.406-.901.901m-241.574 1.663c.68.724 1.272 1.317 1.317 1.317.208 0-.012-.249-1.236-1.398l-1.317-1.235 1.236 1.316m247.677.832-1.095 1.178 1.178-1.096c1.095-1.019 1.305-1.26 1.095-1.26-.045 0-.575.53-1.178 1.178m-245.448 1.126c0 .048.406.453.901.901l.901.814-.814-.901c-.759-.84-.988-1.028-.988-.814m242.672 1.369-.814.901.901-.815c.839-.759 1.028-.987.814-.987-.048 0-.453.405-.901.901m-138.375 38.652c.267.07.703.07.97 0 .267-.069.049-.127-.485-.127-.533 0-.752.058-.485.127m3.191.282c.345.067.844.064 1.109-.005.265-.07-.017-.124-.627-.121-.61.003-.827.06-.482.126m28.41-.005c.267.07.703.07.97 0 .267-.069.049-.126-.485-.126s-.752.057-.485.126m-24.39.285c.421.064 1.045.063 1.386-.003.341-.066-.004-.118-.766-.116-.762.002-1.041.056-.62.119m19.959 0c.421.064 1.045.063 1.386-.003.34-.066-.004-.118-.767-.116-.762.002-1.041.056-.619.119m-12.048.286c1.571.049 4.066.049 5.544-.001 1.479-.049.193-.09-2.856-.09s-4.259.041-2.688.091m-13.459 5.251c.267.069.704.069.97 0 .267-.07.049-.127-.485-.127-.533 0-.752.057-.485.127m31.601 0c.267.069.704.069.97 0 .267-.07.049-.127-.485-.127-.533 0-.752.057-.485.127m-28.136.281c.343.066.905.066 1.248 0 .343-.066.062-.12-.624-.12-.686 0-.967.054-.624.12m24.117 0c.343.066.904.066 1.247 0 .343-.066.062-.12-.624-.12-.686 0-.966.054-.623.12m-18.843.285c.652.059 1.65.058 2.218-.002.568-.059.034-.107-1.185-.106-1.22.001-1.685.05-1.033.108m12.752 0c.652.059 1.65.058 2.217-.002.568-.059.034-.107-1.185-.106-1.22.001-1.684.05-1.032.108'
                  fill='#9a75d9'
              />
              <path
                  d='M97.481 244.418c-.072.116 4.847.177 10.931.136l11.061-.076v3.879l-4.227.077-4.227.076-.139 11.685c-.076 6.427-.045 11.628.069 11.557.115-.071.208-5.295.208-11.609v-11.48l4.228-.076 4.227-.077v-4.158l-11-.072c-6.051-.04-11.06.022-11.131.138m33.852 0a22.67 22.67 0 0 0 2.772-.001c.719-.057.06-.103-1.465-.102-1.524 0-2.113.047-1.307.103m19.117.002c1.563.05 4.12.05 5.683 0 1.563-.049.284-.09-2.841-.09-3.126 0-4.404.041-2.842.09m24.948.001c2.935.045 7.738.045 10.673 0 2.935-.045.533-.082-5.336-.082-5.87 0-8.271.037-5.337.082m30.285-.002 8.593.08v3.862l-6.306.075-6.307.074v6.93l6.28.139c3.455.076 6.223.045 6.152-.07-.071-.114-2.866-.208-6.211-.208h-6.082v-6.642l6.306-.074 6.306-.075v-4.158l-8.662-.006-8.663-.006 8.594.079m17.533.001c1.486.05 3.918.05 5.405 0 1.486-.05.27-.091-2.703-.091s-4.189.041-2.702.091m-75.683 13.706c-.034 7.424.031 13.555.145 13.626.189.117.186-9.82-.007-22.272-.042-2.668-.104 1.223-.138 8.646m22.233-11.418.019 1.802 4.224.077 4.225.076.077 11.358.077 11.358-.005-11.434-.005-11.435-4.214-.076-4.215-.077-.101-1.725-.101-1.726.019 1.802m26.831 11.418c-.034 7.424.032 13.555.146 13.626.189.117.185-9.82-.008-22.272-.041-2.668-.103 1.223-.138 8.646m-112.536-9.833a6.176 6.176 0 0 0 1.525 0c.419-.064.076-.116-.763-.116-.838 0-1.181.052-.762.116m13.417.148c.071.114 1.993.208 4.271.208h4.142v11.487c0 6.318.093 11.545.207 11.616.115.071.146-5.13.07-11.557l-.139-11.685-4.34-.139c-2.387-.076-4.282-.045-4.211.07m90.187-.081-4.297.15-.139 11.685c-.076 6.427-.045 11.628.07 11.557.114-.071.208-5.298.208-11.616v-11.487h4.141c2.462 0 4.211-.113 4.313-.278.094-.152.133-.251.086-.218-.047.032-2.019.125-4.382.207m-20.702 4.169c0 .991.051 1.397.112.901a8.743 8.743 0 0 0 0-1.801c-.061-.496-.112-.091-.112.9m-12.9 4.64a22.47 22.47 0 0 0 2.772-.001c.719-.057.06-.103-1.464-.102-1.525.001-2.113.047-1.308.103m72.34 0c.801.056 2.111.056 2.911 0 .8-.056.145-.102-1.455-.102-1.601 0-2.256.046-1.456.102m10.588 1.39-.955 1.039 1.04-.955c.571-.526 1.039-.993 1.039-1.04 0-.211-.235-.012-1.124.956m-35.34 5.058.012 4.02 6.237.008 6.237.007-6.16-.082-6.16-.082-.089-3.945-.089-3.945.012 4.019m-47.123-2.287c1.06.054 2.121.247 2.356.43.375.292.38.273.047-.152-.307-.392-.761-.475-2.356-.431l-1.976.054 1.929.099m71.605-.004c.652.059 1.65.058 2.218-.002.568-.059.034-.107-1.185-.106-1.22.001-1.685.049-1.033.108m-131.532 2.846c0 .686.054.967.12.624a3.958 3.958 0 0 0 0-1.248c-.066-.343-.12-.062-.12.624m-18.392 1.594-.672.762.832-.693c.457-.381.883-.724.947-.762.063-.038-.009-.07-.16-.07s-.577.344-.947.763m-1.489 1.716c-.268.296-.422.702-.342.901.112.279.15.272.167-.031.012-.217.228-.622.481-.901.252-.279.396-.507.32-.507-.076 0-.358.242-.626.538m8.097 4.925c.345.066.844.064 1.109-.006.265-.069-.017-.123-.627-.12-.61.003-.827.059-.482.126m2.217 0c.345.066.844.064 1.109-.006.265-.069-.017-.123-.627-.12-.61.003-.826.059-.482.126'
                  fill='#be7181'
              />
          </g>
      </svg>
  )
};

export default Icon;