import React from "react";

import { CustomTopMenuImage } from "@Custom/Image";
import CTypography from "@Custom/CTypography";
import CBox from "@Custom/CBox";

export const MainMenu = () => {
  return (
    <CBox alignItems="center" display="flex">
      <CBox>
        <CustomTopMenuImage src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAACDCAMAAACz+jyXAAABC1BMVEX/////xQD/fgD8ABeKioyHh4mFhYf8AAD/wwCQkJKCgoSWlpf//vX/34X/wQD/6rHn5+fe3t+enqCqqqvExMW4uLn4+Pj/dwD/yAD/yzT/2nP/mAD/01n//O7/xxP/dgDY2NnOzs+xsbPm5ue+vr/w8PDIyMn/gQCkpKb8AA38PUj/6tn/6+3+1tn/mkr/9fb/z6z9Ymv+xcj9Tlj/2bz9par/lDz/9Or/o1/+u7/9hYz9m6H+Sg79kZf/5dH+q7D9gYj8EiD/s33/jij/xqD/wJH8WWD/9NL8KjT+zM//wpf/oFb/2Wz/2t3/0nr/pnT9Ugz/uYT/qmr8LTv9bnf8LBL8Hiz/vlT8UlyORmlgAAASzklEQVR4nO1dCXvbRpJlZKA5ALwTHAQ4NwEQgEFZtmzZlnysD0WxN07WuxOPR5v//0u2Gmcf1U1QokfJqF++L7HJPut1VVdXdTOz2a8Sb767uPfw+7ObHsZtxaOL1fLg4GC5+nz/podyG3H/dHXQYbl8f9OjuX34eXnAYHX65qYHdLvALP9eC4wSXAvHO5V+dCBj9ZPZjK+C408nrx9/eHJ4+OHxyxcPjibV+Swu/1YHLsS9+L/+46r40/4n+qvE0bMPP8wBGwr6h8snrx9sq3T34RKTP8VTvuS3v//dFfH7u19ryr8mnHy4A7K/wwFoOHyrrXX/Qin/gxW/EXz7u2+uiNtAwMnhfH4Hw2Z++Uxd7alS+g0D37FlDQFqHD0R1z5PwUdFvafq5d8y8JwpbAhQ4pVi9Y8UfEH9ou/R7ZfF8uFY2hCgACx/rfgp5ueIEvy4Vf6UgUF4hgAcHzfb5U+VQNoJ3k+QPzBw2h8IDAEoTjTWn1eCV3zFKeufY8AQgGGy/IGB12zFqfIfGTAEIHgwXf7AAGOFpst/YMAQIONos4P8gYGTvuKjLf6nwEDjCxkCZBxO2X9HbO503ug2/19igJ4HDAESXu8mf1CBJ029Nyo5rw4UlomeiQ0BIo52lT8wQCND9+/h4l++P5u9eYhTsHovEaALv90OAg6xDaAJgzYxUdQInR/Pzi5wEXcZgKcHqH1aPRUI+OOf1PjvW0HAC0QBNvPLdy9OPh09OHn7C8rB/OUMjz8vH/XtKgLUq//hpfoXzdDu/u02ECArwGZ+eDJ+f/zqEqHoh/9FxXuPzQJ/h5qhP/9hMgF/vQ0EfJSkOz9/IZR5KSvBP9Hlf8EnIH/ESDIE8HgsEjA/lFOQL+5spsj/VJQQdk4wBHA4Ohfl/yRBij0QGFghHtDyVK6HZGoMARzeCgqw+Qd+FYK3VH/H5H+BMSef1QwBHEQLNFddgXjFFPwndgK4wC+gSFbIEMDi+B+8aQH3UoUfxpKYd3NPdQHo56UhQI1PogKoi47nhf/EDNBTZcXnS0OAEsIpTKMAs9l5rwLI+l9p7iDeNRqghhCHm3+aUBZRADbpLuPNyhCgwheegHNd2ZO5egfQvwX4vDQEKMA7QZvHurLHc5ULtPxOV282O1sZAhTgCdBuAbNjtQXa9hjmJ0OAAh84L5TPt4tIWpcVOwRsI4ANChkCWOxCwKwlYCPLX+ODtjg1GqCAQIDeBJ0rN2GtEyS4QYYAFsIm/ERX9ljjhj7SVeQUwBDAQXBDNQdh5tAma4A6EEHx3pwDlHgpEHCiKfuuL7vjSYw/hxkCOIihCN1BYCyGpFmWP6uqnQl0GQJYSME4dSzi2VgU80RXqm3g1ERDNTi65MPR6m34mKUKS8iscF/0J5MP0OIXIdk7Vz3G+8DpChYPWmHv4j+bjJger6ScPP4i9RlfDs2JLWUGZPkbAnh8Ei+cbDbYUzwxdYwmZeQTMfZ42xDAQ7qXtUGsEHJ99+8IAcKB7Ay9G2cI4CGtbeqM8r7QR+T6+ubDQ5SBH8dq+OPt1f99IxBwV4lbQcDxpXz1c37ny8f+dsrRW/Tx8PzBfYyAg+Xz/kyM/XYHzV0Kl3P/9kcNvrkFBIjbayff+eWTd89O3r785Ry9Hz3/oHqesbzXmKGz5/i3z837AAmIClAbs1HfTu8ObIoHSsuL94+e45fT6eU5Q4CIE0wF9Ji/a2qqnggvl4q3Sxd3DQEIpPu527Dpk/f4BXQlmpipIUDGLo9UGwUYDmvIQWuL/A0BCB7spgLsY3l8r8Xl32aODQEIkMOARv5f2KqTGegfzxgCMOzwUpV6oCyeT9sHht+OMwSgmMwAv/4ppjDA/HafIQDH22k7MXZxYrsvxD4eMwQo8BF7DClgs0HTBdt+Mmj8saCZIUCNo8fblGB+qMhY6n80hc/YGwLUeHFHpwRzzcU53c+mcD/ZZwjQInmtjv7MH+t+QRePjTbyF95umB9u1ePZOcLBfD5/t+UHjM8UP90qZcn++u2V8dUm/evCx5eXzQ8Xd9su/PnOY/HtPAYs/yj/dLTBFHx68fLJD+cUl4df3m794egOj6Qg6PL59loGKhxT7FRDSAJ3uRmDfyG+vzdSsPxs/t8B/3qcfW5zYcvV6bZXGwZfB/ffnx6sLj6b/33MDeLszBgfAwMDg39XrNf+TQ/hdsN1rZsewu2Gazk3PYTfJrK4R3WtdgwBV0Tu2i3c6FrtGAKuiNy2Wtg3QsAiDNfX6vc3j70RYF+JgJi4wbX6/c1jXwQ4XniVarFtCNgPAVeEIcAQcMMwBNwwDAFfG4kfBEFZqr6eTkDT0FrZkBplqe5+AgHQ79Rey3UQ+NjvhbejX5f4d0LJEubpT+mRTkzbYpLGIXE7OFElhMsS3/fLaCAgDFIKVB5lVTt9Q16cIr1CW0i9oAjttpYditV82n1uk8wfILVbLrp+SVjg54WyrwVFu7k6uTiUMvZ6KcTaY4e/qK1hnnmmlm5ZRb1AvKjC2VrnNpxyrQE2cb2KbXLRCGb8vhui3GtQu4QelgmgOTTbsdQlEowrC6ep11Ujrp0z1RK3635YIq4rCC4L234B8ug71G2tpIA+rLYozCRkl5EfcbOsVWHbJPO6/kj3HzfC6UrDQSBtuTCVynC9jr07TMmKSAUAnjjLElqyieVFRZZli6L2bAL/LIRS8km4sqAc8aK4otUiWs0m8dB64rbSsuwBPAGZQ/u1vbCOag/+LIy+Q23bUCu1CHxt0aJhWzQaOlpQQYCQXFhhpPljgUvVaedZ53FRFFHo0AEz7YyiDduB1bRcXnsWLSce6Be2LP4Gbj5KaBIBa8e23JDRssQvHGK5NV9OJCCJXIs4BWNVyoUHH3l9Q0lOI4Ah7D1DOJBVkLJ26bSyzsgm69hxQa65KI+GgIqKv87a6kmQw+SHjnKXyryuYAfwg6qmFJAQUaWCSnXor5lnRSXtiAqT2e3AxqFmdKw2G8xMalS2LQPDZjuJgDWsUCcTxpAAvzZfUCAgCWFZLMR5ZrQxznoVik04pbTzBiDJgHdJdkBACRMhXsp8COpvdePLKTfMpkC/smxJzWd0vYTSUGAYtsWb24x2JhYMQvh0NAo6+QMDcVdsCgGJJ0q66xFGVrMfCATExHYQ+1mKzSm8oAzok+1NEhNJdrVtLWDyoqWogIGw+6/D9wBDh/JC04XLCpDpMrRtLsbic0ZkBBDtDgOOBMkK1qif8hQCChAk6gvQgbBKxxOwhmWG7l9AKGHHjxOQgThqrNsAVMjjPqltdk2NSKGJeFZiqx1WAT92aNe1XFHNO8BWwH5T8+MfQRdHOQyfET64J55jce5ON4UJBCRQU+E0pNAhU5QnIOJHzcCHyTPUoAQEBF9lgNIRViQlgNfFDgtY++DlYuundCxu7I2U8Z2ZriW2Q/gbZhDakdjtoBNW/CRu5wc700hBN+fKReTPDzhwbWWQE4TMKC1HAHg4uN4AFoQ98mEEwAQkEzEA1rTLyqrRANQPp8ZDsX5gwXMCz3TBdGhnbL+wiSpzSEfWFFyMC9uNGTHA4umF3DKVOZ4HyjGu/QbcLrcgqGVs2+NGzREA60QpwcSx3bELjIBaNDMcfNLNsy9sKURSggpYioVNz//MX0PdeXxBRuPe7PmqgnEnrFGkghkoBxVgZDXYIVRksZpwGLZljcuLIwAUR2FCmjYZc4sQAMsTX9IdQIUYkwMEqJStUQ78u3LcCZu/2ZorHanLLEJPdIoY+O3CKQfDQsStqR5UYGxETwBowMRcvUiAJrKUMEJBCPBstdY1AIM97iKwJFVdgcOoXAc110mSqAzmjKozUzTUENA1kzpeB4l9byBgXLl6AlKtJFlwBMAi0BgRFjIBoADK/QMZVK3c7ukolJYlI5Ojv5wG5BOit8kAqdNBN8ZG9ASAqpJpN954L8hTi4WHTEC9TQFmM4tZhjWrDjzAhVMa7DVRexfSEJkBwXaNuVxTkBSjIzqZADhfyGdxFDwB1BNOp1STCEi27AAUYBgHettYEA5P7YuVlm6jZ7Hmz7gah1WD0s8ih/H6pxOQ0LO4FFJAIJyE4SyOhExlSASkGse3h88sQx0BoZoAmNc0AlLwaViVpAc8ZTxVQrkOMhqvc2is1roKAeC8wgpw8nSbMOVYkEWsKNtWTSIAjk7ysVYEc1qJviYBSVoTm/BBiooG3uqtEwPVWdRgA90mYm0J2IGAWUJPcDRMm1eqbBOFFA2Nm6iw5USLVFNNIsCjjm+iB3Xneql/LQISPwABUvFXwlmoD1tHVaDOh5UxjWaLcr8SAdBY7rpdmqLpFu1Vzgf4udtG4qGaUxe4DkkEYKdzBEOtfRNQBukijuAI3WRlCBxlS1fwCpKMJpq6icH6kieW5Egy5uoEANLYcV3SZ4GwvB52NTFJc4smQWiqCqpZuezBYQTYEzAcTvdIQJLlHpV5nw5z3YgmJQORgBlNXYajPGwrT7lv17YuGn0lAppm0wJ28i4paW3PiHWzCrI8tJpq1CDGgkQwArwJGFIUeyOgy3+SBl6dV/3KThECKPxOHrQWcDWOIlBoMTiU1yKg7zamyUVojXf09Zdzk3WWN0aRuLwThxCw2x3TPRGQ2U2a0akXqXgFQ0VAizItYH3RxVV39Ups+QOxTlGm5PoENF1kIaxnPik5QXBttTEpSSERQLadgwXshYCkdsHwhbhroyegqR7k4CvaJG3+VtuC5GFKsAdSq53tiQCAX9PMHPPBtJXrR7BW2KSkRICjC7Yg2AsBHs2pqQ7U2wmg7VU0h0qNQumy0qfex9rvvSU9ATsesTNYzEyoa6rpSPmMikRApA4toNgHAREs31TZwyQC6C0E0qSamDSXWwseI0bA8Nnk2EiPgLC5rcm2m+YyNeHo6fHXFnsgACZCNBG2iQQ0Q/FYC+RK1SqEgHQkbFIvDGI2Ejx980wJs/gkAtY7Rrv2QECtD+9MJiDxbFiRnqVe0cM1RIaA0Wdyd7K9syZuNk5wB+8Fxjl0JUdD7e3BOBbXJ6B0LFe372earCCPitjFbFjPcq0xI8YQkAwE2DtH+Txm8jsQEI/HqFnB5vvaT3RJuBbrxWKYwPUJ8LfoXLE9Pt63RLc3Ty3PECNgZExWgbQotIsRdHdoiCFgXRTapEXFmPmKiImDUn3voIfnunskINXlT2dcgqIotGsjcUAIo5T5ixf0ipGFEZAz91UEuVWuvI8IQ8MI8F1Xu6QyhoDAlYKf0bYV57PatgcCiFb3S+bKlucS3YpsCBjlyV1NKws2PMQSkDJ+q+vEWTbWKok+ZKgyQURvxgvGBCGJEThJqmVKEbJGai8aoDsCxfZIgO6SyKyZTMjL0yvSIAjSKndcVT6AtUFWc4uY6aK2RQvNQbUJx3q3omY2YW5H7qepN0LgyzHbzR72AKLbvkDdRgJKfb4adCmeJYQTJ43pESkwzREg3M8S0j+aDiuicEPpjRz1GoatiplwQeQEDJg2tQ1bs5cw90EAvf2nPPsl9GLnKBIwj5p0Ubtei22hUJGA8bJE+x1/70x7R41ph/OCYqJZw3zWHVwzSQVo4hW5l9/AF67N7eEcEKstbXMTktFnMI9dxAdB2t32cvS5AJmAgKOMI6BU3AWetRedmaOGeCvCxu7gd9PlxCL+ncIHBjx0G5Fu5+6BALqS8Emm9GWBz3pJ9LZ1ije57o/4vlIFRjeUd/04I8S7BCm9ko+Jork5r7ycW1I5Yb5oWYvnfpr2l26y+7R1xOVb2OJt533EgprL2PIkg9q1wJ/zuU06p9dKsVYrezCcgXgfvRd75KFCbh59jATwRi6lKWXpfoNP41fcBXThIEYlaEsBxmRB012C4+/TDE8sSLGkk/f4V3JJGoL9FzRrL9FQepNamGSZ0Scm9N57wt/TiOkzH+n5Hn2hMcbnyxDJydhuMQSKpDDFeqwh7om+R5/61dl66LPMapoO4BUDeaJEX9EsxmpJEDc3LKQNz6cf2/RtFttiRdNTTtRl9JOSxtxt2xXdq/0kZLImxRQ2oeO1H1R5+/CrVWKHbyZrBsbeE/FbstihVYLfSR8O+swGLftdTaLZRgigr+3abJFXR3Gc1w4dGxENhByKSClzhDhOSF+BRR6VH0HVNynarD9/lbzM6YigX8fznKZT+Snc3jJizUtEu3lWCv9u065e1nfBe0ndwCyHrpk4717ziUPL6iYdbjc5bjiaNlyuhwehiH32KzBR8BXiZ2WhOzwYbfLVjvRiFEQoVQsioZqtCm0kWfPsVphDsnDc/lZNk3dFRh1KtUbAClASYLvCgvFjx+2fpxL6GnrgNZVk0j/AHWdWYxtekBVRFHphVGAvq3dDEhT9DuJE1fSUCWhz2KainXChjRBBH8hnZdbWd0J9fGkvKOmNlCiPFxl+9YYfWFF3AuFedP8/KS7ydCHWFh8AAAAASUVORK5CYII=" />
      </CBox>
      <CBox px="2rem">
        <CTypography variant="h4">Prueba tecnica atSistemas</CTypography>
      </CBox>
    </CBox>
  );
};
