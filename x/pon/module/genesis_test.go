package pon_test

import (
	"testing"

	"github.com/stretchr/testify/require"
	keepertest "pon/testutil/keeper"
	"pon/testutil/nullify"
	"pon/x/pon/module"
	"pon/x/pon/types"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.PonKeeper(t)
	pon.InitGenesis(ctx, k, genesisState)
	got := pon.ExportGenesis(ctx, k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
