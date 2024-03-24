<?php

namespace App\Http\Controllers;

use App\Models\Barang;
use Illuminate\Http\Request;

class BarangController extends Controller
{
    public function getAll()
    {
        $barang = Barang::all();
        return response()->json($barang);
    }

    public function getOne($id)
    {
        $barang = Barang::find($id);
        if (!$barang) {
            return response()->json(['message' => 'Barang not found'], 404);
        }
        return response()->json($barang);
    }

    public function create(Request $request)
    {
        $request->validate([
            'nama' => 'sometimes|required|string', // field 'nama' menjadi opsional
            'deskripsi' => 'required|string',
            'stok' => 'required|integer',
            'harga' => 'required|numeric',
        ]);

        $barang = Barang::create($request->all());
        return response()->json($barang, 201);
    }

    public function update(Request $request, $id)
    {
        $barang = Barang::find($id);
        if (!$barang) {
            return response()->json(['message' => 'Barang not found'], 404);
        }

        $request->validate([
            'nama' => 'required|string',
            'deskripsi' => 'required|string',
            'stok' => 'required|integer',
            'harga' => 'required|numeric',
        ]);

        $barang->update($request->all());
        return response()->json($barang);
    }

    public function delete($id)
    {
        $barang = Barang::find($id);
        if (!$barang) {
            return response()->json(['message' => 'Barang not found'], 404);
        }

        $barang->delete();
        return response()->json(null, 204);
    }
}
