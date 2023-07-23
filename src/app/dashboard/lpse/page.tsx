async function getData() {
    const res = await fetch("http://localhost:3000/api/lpse")
    console.log(res.json());
    
}

export default async function Page() {

    return (
        <div>
        <h1 className="text-3xl mb-4">List Data</h1>
        <div className="max-w-7xl rounded overflow-hidden shadow-lg bg-gray-700">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">LPSE</div>
                <table className="table-auto max-w-full bg-slate-700 border rounded-md">
                    <thead>
                        <tr>
                        <th className="px-4 py-2">Title</th>
                        <th className="px-4 py-2">Author</th>
                        <th className="px-4 py-2">Views</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td className="border px-4 py-2">Intro to CSS</td>
                        <td className="border px-4 py-2">Adam</td>
                        <td className="border px-4 py-2">858</td>
                        </tr>
                        <tr className="">
                        <td className="border px-4 py-2">A Long and Winding Tour of the History of UI Frameworks and Tools and the Impact on Design</td>
                        <td className="border px-4 py-2">Adam</td>
                        <td className="border px-4 py-2">112</td>
                        </tr>
                        <tr>
                        <td className="border px-4 py-2">Intro to JavaScript</td>
                        <td className="border px-4 py-2">Chris</td>
                        <td className="border px-4 py-2">1,280</td>
                        </tr>
                    </tbody>
                </table>
                </div>
                <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            </div>
        </div>
        </div>
    )
  }